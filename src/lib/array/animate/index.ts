import {Algorithm, AnimateAlgorithmFunction, AlgorithmId} from '$lib/types';
import {
  linearSearchAlgorithm,
  linearSearchAlgorithmCode,
  linearSearchAlgorithmFunction,
} from './linearSearch';

export const arrayAnimateAlgorithms: Algorithm[] = [linearSearchAlgorithm];

export const arrayAnimateAlgorithmFunctionMap: Record<
  AlgorithmId,
  AnimateAlgorithmFunction
> = {[linearSearchAlgorithm.id]: linearSearchAlgorithmFunction};

export const arrayAnimateAlgorithmCode: Record<AlgorithmId, string> = {
  [linearSearchAlgorithm.id]: linearSearchAlgorithmCode,
};
