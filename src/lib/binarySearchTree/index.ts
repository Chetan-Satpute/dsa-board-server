import {EdgeType, Frame} from '$lib/frame';
import Node from '$lib/node';
import Structure from '$lib/structure';
import {CustomError} from '$lib/utils';
import {createRandomNumberArray} from '$utils/index';

type BinarySearchTreeData = {
  value: number;
  left: BinarySearchTreeData;
  right: BinarySearchTreeData;
} | null;

class BinarySearchTreeNode extends Node {
  left: BinarySearchTreeNode | null;
  right: BinarySearchTreeNode | null;

  private leftEdgePercent: number;
  private rightEdgePercent: number;

  constructor() {
    super();

    this.left = null;
    this.right = null;

    this.leftEdgePercent = 100;
    this.rightEdgePercent = 100;
  }

  toFrame(frame: Frame): Frame {
    super.toFrame(frame);

    if (this.left) {
      frame.edges.push({
        startNodePosition: {x: this.x, y: this.y},
        endNodePosition: {x: this.left.x, y: this.left.y},

        percent: this.leftEdgePercent,
        type: EdgeType.DIRECTED,
      });
    }

    if (this.right) {
      frame.edges.push({
        startNodePosition: {x: this.x, y: this.y},
        endNodePosition: {x: this.right.x, y: this.right.y},

        percent: this.rightEdgePercent,
        type: EdgeType.DIRECTED,
      });
    }

    return frame;
  }
}

class BinarySearchTree extends Structure {
  root: BinarySearchTreeNode | null;

  constructor() {
    super();

    this.root = null;
  }

  insert(value: number) {
    const node = new BinarySearchTreeNode();
    node.value = value;

    if (this.root === null) {
      return (this.root = node);
    }

    let ptr = this.root;
    while (ptr) {
      if (value < ptr.value) {
        if (!ptr.left) return (ptr.left = node);
        else ptr = ptr.left;
      } else if (value > ptr.value) {
        if (!ptr.right) return (ptr.right = node);
        else ptr = ptr.right;
      } else return ptr;
    }

    throw new CustomError();
  }

  rearrange() {
    let index = 0;

    const _rearrange = (node: BinarySearchTreeNode | null, height: number) => {
      if (node === null) {
        return;
      }

      _rearrange(node.left, height + 1);

      node.moveTo(
        this.x + index * BinarySearchTreeNode.NODE_WIDTH,
        this.y + height * BinarySearchTreeNode.NODE_HEIGHT * 2
      );
      index += 1;

      _rearrange(node.right, height + 1);
    };

    _rearrange(this.root, 0);
  }

  toFrame(frame: Frame): Frame {
    return this._toFrame(frame, this.root);
  }

  private _toFrame(frame: Frame, node: BinarySearchTreeNode | null): Frame {
    if (node === null) {
      return frame;
    }

    node.toFrame(frame);
    this._toFrame(frame, node.left);
    this._toFrame(frame, node.right);

    return frame;
  }

  toString(): string {
    const _recurse = (
      node: BinarySearchTreeNode | null
    ): BinarySearchTreeData => {
      if (node === null) {
        return null;
      }

      return {
        value: node.value,
        left: _recurse(node.left),
        right: _recurse(node.right),
      };
    };

    const data = _recurse(this.root);
    return JSON.stringify(data);
  }

  static fromString(str: string): BinarySearchTree {
    const data = JSON.parse(str) as BinarySearchTreeData;

    const _fromData = (data: BinarySearchTreeData) => {
      if (data === null) {
        return null;
      }

      const node = new BinarySearchTreeNode();
      node.value = data.value;
      node.left = _fromData(data.left);
      node.right = _fromData(data.right);

      return node;
    };

    const root = _fromData(data);

    const tree = new BinarySearchTree();
    tree.root = root;

    return tree;
  }

  static random(): BinarySearchTree {
    const values = createRandomNumberArray();

    const tree = new BinarySearchTree();

    for (const value of values) {
      tree.insert(value);
    }

    tree.rearrange();

    return tree;
  }
}

export default BinarySearchTree;
