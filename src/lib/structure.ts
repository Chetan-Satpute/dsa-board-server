import {Frame} from '$lib/frame';

class Structure {
  x: number;
  y: number;

  constructor() {
    this.x = 0;
    this.y = 0;
  }

  rearrange() {
    // rearrange components of structure based on x and y co-ordinates
  }

  moveTo(x: number, y: number) {
    this.x = x;
    this.y = y;

    this.rearrange();
  }

  toFrame(frame: Frame) {
    return frame;
  }

  toString() {
    return '';
  }

  static fromString(str: string) {
    str;
    return new Structure();
  }

  static random() {
    return new Structure();
  }
}

export default Structure;
