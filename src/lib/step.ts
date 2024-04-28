import {Frame} from './frame';

export interface Step {
  frames: Frame[];
  stack: string[];
  highlight: number[];
}

export function createStep(): Step {
  return {
    frames: [],
    stack: [],
    highlight: [],
  };
}
