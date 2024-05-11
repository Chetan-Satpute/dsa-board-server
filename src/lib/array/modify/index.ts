import {Algorithm, AlgorithmId, ModifyAlgorithmFunction} from '$lib/types';
import {
  randomArrayAlgorithm,
  randomArrayAlgorithmFunction,
} from './randomArray';
import {
  replaceArrayAlgorithm,
  replaceArrayAlgorithmFunction,
} from './replaceArray';
import {sortArrayAlgorithm, sortArrayAlgorithmFunction} from './sortArray';

export const arrayModifyAlgorithms: Algorithm[] = [
  randomArrayAlgorithm,
  replaceArrayAlgorithm,
  sortArrayAlgorithm,
];

export const arrayModifyAlgorithmFunctionMap: Record<
  AlgorithmId,
  ModifyAlgorithmFunction
> = {
  [replaceArrayAlgorithm.id]: replaceArrayAlgorithmFunction,
  [randomArrayAlgorithm.id]: randomArrayAlgorithmFunction,
  [sortArrayAlgorithm.id]: sortArrayAlgorithmFunction,
};
