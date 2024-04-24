import {Algorithm, AlgorithmFunction, AlgorithmId} from '$lib/types';
import {
  replaceArrayAlgorithm,
  replaceArrayAlgorithmFunction,
} from './replaceArray';

export const arrayModifyAlgorithms: Algorithm[] = [replaceArrayAlgorithm];
export const arrayModifyAlgorithmFunctionMap: Record<
  AlgorithmId,
  AlgorithmFunction
> = {
  [replaceArrayAlgorithm.id]: replaceArrayAlgorithmFunction,
};

