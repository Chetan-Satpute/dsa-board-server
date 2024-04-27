import {Algorithm, AlgorithmId, ModifyAlgorithmFunction} from '$lib/types';
import {
  randomArrayAlgorithm,
  randomArrayAlgorithmFunction,
} from './randomArray';
import {
  replaceArrayAlgorithm,
  replaceArrayAlgorithmFunction,
} from './replaceArray';

export const arrayModifyAlgorithms: Algorithm[] = [
  randomArrayAlgorithm,
  replaceArrayAlgorithm,
];

export const arrayModifyAlgorithmFunctionMap: Record<
  AlgorithmId,
  ModifyAlgorithmFunction
> = {
  [replaceArrayAlgorithm.id]: replaceArrayAlgorithmFunction,
  [randomArrayAlgorithm.id]: randomArrayAlgorithmFunction,
};
