import Structure from '$lib/structure';
import StepStorage from '$services/Storage';
import {createFrame} from './frame';
import {Step, createStep} from './step';

class Board {
  storeId: string;

  structures: Structure[];
  currentStep: Step;

  constructor() {
    this.storeId = StepStorage.getId();

    this.structures = [];
    this.currentStep = createStep();
  }

  add(struct: Structure) {
    const index = this.structures.indexOf(struct);
    if (index === -1) this.structures.push(struct);
  }

  remove(struct: Structure) {
    const index = this.structures.indexOf(struct);
    if (index !== -1) this.structures.splice(index, 1);
  }

  pushFrame() {
    const frame = createFrame();

    for (const struct of this.structures) {
      struct.toFrame(frame);
    }

    this.currentStep.frames.push(frame);
  }

  pushStep(highlight: number[]) {
    this.currentStep.highlight = highlight;
    const cloneStack = [...this.currentStep.stack];

    this.pushFrame();
    StepStorage.saveStep(this.storeId, this.currentStep);

    this.currentStep = createStep();
    this.currentStep.stack = cloneStack;
  }

  pushStack(callSignature: string) {
    this.currentStep.stack.unshift(callSignature);
  }

  popStack() {
    this.currentStep.stack.shift();
  }
}

export default Board;
