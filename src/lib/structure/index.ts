import {Frame} from '../board/frame';

class Structure {
  id: number | null;

  x: number;
  y: number;

  constructor() {
    this.id = null;

    this.x = 0;
    this.y = 0;
  }

  rearrange() {
    // rearrange based on x and y co-ordinates
  }

  serialize(frame: Frame) {
    // add components to frame
    // components (node, edge and label)
    return frame;
  }

  moveTo(x: number, y: number) {
    this.x = x;
    this.y = y;

    this.rearrange();
  }

  toData(): unknown {
    return null;
  }

  static fromData(data: unknown): Structure {
    data;
    return new Structure();
  }

  static getRandom(): Structure {
    return new Structure();
  }
}

export default Structure;
