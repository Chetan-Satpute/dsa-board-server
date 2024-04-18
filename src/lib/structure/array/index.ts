import Structure from '..';
import {Frame} from '../../board/frame';
import Node, {NODE_WIDTH} from '../../board/node';
import {getRandomNumberArray} from '../../utils';

class NodeArray extends Structure {
  array: Node[];

  constructor() {
    super();

    this.array = [];
  }

  rearrange(): void {
    let x = this.x;

    for (let i = 0; i < this.array.length; i++, x += NODE_WIDTH) {
      this.array[i].moveTo(x, this.y);
      this.array[i].corners = 0b0000;
    }

    if (this.array.length > 0) {
      this.array[0].corners = 0b1001;
      this.array[this.array.length - 1].corners = 0b0110;
    }
  }

  serialize(frame: Frame): Frame {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].serialize(frame);
    }

    return frame;
  }

  static getRandom(): NodeArray {
    const values = getRandomNumberArray();
    const nodeArray = new NodeArray();

    nodeArray.array = [];

    for (let i = 0; i < values.length; i++) {
      nodeArray.array.push(new Node(values[i]));
    }

    nodeArray.rearrange();

    return nodeArray;
  }
}

export default NodeArray;
