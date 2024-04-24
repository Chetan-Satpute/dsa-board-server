import {Frame} from '$lib/frame';
import Structure from '$lib/structure';

class Node extends Structure {
  value: number;
  color: string;
  corners: number;

  static NODE_WIDTH = 60;
  static NODE_HEIGHT = Node.NODE_WIDTH / 2;
  static NODE_RADIUS = Node.NODE_HEIGHT / 2;

  constructor(value?: number) {
    super();

    this.value = value || 0;
    this.color = '#ffffff';
    this.corners = 0b1111;
  }

  toFrame(frame: Frame): Frame {
    frame.nodes.push({
      x: this.x,
      y: this.y,
      value: this.value,
      color: this.color,
      corners: this.corners,
    });

    return frame;
  }

  toString(): string {
    return this.value.toString();
  }

  static fromString(str: string): Node {
    const value = Number(str);

    const node = new Node();
    node.value = Number.isNaN(value) ? 0 : value;

    return node;
  }
}

export default Node;
