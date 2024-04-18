import Structure from '../structure';
import {Color} from '../color';
import {Frame} from './frame';

export const NODE_WIDTH = 60;
export const NODE_HEIGHT = NODE_WIDTH / 2;

class Node extends Structure {
  value: number;
  corners: number;
  color: string;

  constructor(val?: number) {
    super();

    this.value = val || 0;
    this.corners = 0b1111;
    this.color = Color.white;
  }

  serialize(frame: Frame): Frame {
    frame.nodes.push({
      x: this.x,
      y: this.y,

      value: this.value,
      corners: this.corners,
      color: this.color,
    });

    return frame;
  }
}

export default Node;
