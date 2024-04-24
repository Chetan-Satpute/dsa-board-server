import Structure from '$lib/structure';

class Board {
  structures: Structure[];

  constructor() {
    this.structures = [];
  }

  add(struct: Structure) {
    const index = this.structures.indexOf(struct);
    if (index === -1) this.structures.push(struct);
  }

  remove(struct: Structure) {
    const index = this.structures.indexOf(struct);
    if (index !== -1) this.structures.splice(index, 1);
  }
}

export default Board;
