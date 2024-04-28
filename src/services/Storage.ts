import {v4 as uuid} from 'uuid';

import {Step} from '$lib/step';

const store: Record<string, string[]> = {};

class StepStorage {
  static timeouts: NodeJS.Timeout[] = [];

  static getId() {
    let id = '';
    do {
      id = uuid();
    } while (id in store);

    store[id] = [];
    const timeout = setTimeout(
      () => {
        StepStorage.timeouts.filter(t => t !== timeout);
        delete store[id];
      },
      30 * 60 * 1000
    );

    StepStorage.timeouts.push(timeout);

    return id;
  }

  static saveStep(id: string, step: Step) {
    store[id].push(JSON.stringify(step));
  }

  static getStep(id: string, index: number): Step {
    return JSON.parse(store[id][index]) as Step;
  }

  static getStepCount(id: string) {
    return store[id].length;
  }
}

export default StepStorage;
