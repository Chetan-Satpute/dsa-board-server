import Structure from '../structure';
import {idGenerator} from '../utils';
import {Frame, createFrame} from './frame';

class Board {
  structures: Record<string, Structure>;

  getID: () => number;

  constructor() {
    this.structures = {};

    this.getID = idGenerator();
  }

  add(struct: Structure) {
    struct.id = this.getID();
    this.structures[struct.id] = struct;
  }

  remove(struct: Structure) {
    if (struct.id && this.structures[struct.id])
      delete this.structures[struct.id];

    struct.id = null;
  }

  getFrame(): Frame {
    const frame = createFrame();

    const structureList = Object.values(this.structures);
    for (const struct of structureList) {
      struct.serialize(frame);
    }

    return frame;
  }
}

export default Board;
