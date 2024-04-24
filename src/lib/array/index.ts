import {Frame} from '$lib/frame';
import Node from '$lib/node';
import Structure from '$lib/structure';
import {createRandomNumberArray} from '$utils/index';

class NodeArray extends Structure {
  array: Node[];

  constructor() {
    super();

    this.array = [];
  }

  rearrange(): void {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].x = this.x + i * Node.NODE_WIDTH;
      this.array[i].y = this.y;
      this.array[i].corners = 0b0000;
    }

    if (this.array.length > 0) {
      this.array[0].corners |= 0b1001;
      this.array[this.array.length - 1].corners |= 0b0110;
    }
  }

  toFrame(frame: Frame): Frame {
    for (const node of this.array) {
      node.toFrame(frame);
    }

    return frame;
  }

  toString(): string {
    return this.array.map(node => node.value).toString();
  }

  static fromString(str: string): Structure {
    const values = str
      .split(',')
      .map(value => Number(value))
      .filter(value => !Number.isNaN(value));

    const array = new NodeArray();
    array.array = values.map(value => new Node(value));

    return array;
  }

  static random(): NodeArray {
    const values = createRandomNumberArray();
    const array = new NodeArray();

    array.array = values.map(val => new Node(val));
    array.rearrange();

    return array;
  }
}

export default NodeArray;
