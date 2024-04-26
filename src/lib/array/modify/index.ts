import {Algorithm, AlgorithmId, ModifyAlgorithmFunction} from '$lib/types';
import {
  replaceArrayAlgorithm,
  replaceArrayAlgorithmFunction,
} from './replaceArray';

export const arrayModifyAlgorithms: Algorithm[] = [replaceArrayAlgorithm];
export const arrayModifyAlgorithmFunctionMap: Record<
  AlgorithmId,
  ModifyAlgorithmFunction
> = {
  [replaceArrayAlgorithm.id]: replaceArrayAlgorithmFunction,
};
