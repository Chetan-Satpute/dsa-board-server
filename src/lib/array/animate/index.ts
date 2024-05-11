import {Algorithm, AnimateAlgorithmFunction, AlgorithmId} from '$lib/types';
import {
  binarySearchAlgorithm,
  binarySearchAlgorithmCode,
  binarySearchAlgorithmFunction,
} from './binarySearch';
import {
  linearSearchAlgorithm,
  linearSearchAlgorithmCode,
  linearSearchAlgorithmFunction,
} from './linearSearch';

export const arrayAnimateAlgorithms: Algorithm[] = [
  linearSearchAlgorithm,
  binarySearchAlgorithm,
];

export const arrayAnimateAlgorithmFunctionMap: Record<
  AlgorithmId,
  AnimateAlgorithmFunction
> = {
  [linearSearchAlgorithm.id]: linearSearchAlgorithmFunction,
  [binarySearchAlgorithm.id]: binarySearchAlgorithmFunction,
};

export const arrayAnimateAlgorithmCode: Record<AlgorithmId, string> = {
  [linearSearchAlgorithm.id]: linearSearchAlgorithmCode,
  [binarySearchAlgorithm.id]: binarySearchAlgorithmCode,
};
