import {Algorithm, AnimateAlgorithmFunction, AlgorithmId} from '$lib/types';
import {
  selectionSortAlgorithm,
  selectionSortAlgorithmCode,
  selectionSortAlgorithmFunction,
} from './SelectionSort';
import {
  binarySearchAlgorithm,
  binarySearchAlgorithmCode,
  binarySearchAlgorithmFunction,
} from './binarySearch';
import {
  bubbleSortAlgorithm,
  bubbleSortAlgorithmCode,
  bubbleSortAlgorithmFunction,
} from './bubbleSort';
import {
  linearSearchAlgorithm,
  linearSearchAlgorithmCode,
  linearSearchAlgorithmFunction,
} from './linearSearch';

export const arrayAnimateAlgorithms: Algorithm[] = [
  linearSearchAlgorithm,
  binarySearchAlgorithm,
  bubbleSortAlgorithm,
  selectionSortAlgorithm,
];

export const arrayAnimateAlgorithmFunctionMap: Record<
  AlgorithmId,
  AnimateAlgorithmFunction
> = {
  [linearSearchAlgorithm.id]: linearSearchAlgorithmFunction,
  [binarySearchAlgorithm.id]: binarySearchAlgorithmFunction,
  [bubbleSortAlgorithm.id]: bubbleSortAlgorithmFunction,
  [selectionSortAlgorithm.id]: selectionSortAlgorithmFunction,
};

export const arrayAnimateAlgorithmCode: Record<AlgorithmId, string> = {
  [linearSearchAlgorithm.id]: linearSearchAlgorithmCode,
  [binarySearchAlgorithm.id]: binarySearchAlgorithmCode,
  [bubbleSortAlgorithm.id]: bubbleSortAlgorithmCode,
  [selectionSortAlgorithm.id]: selectionSortAlgorithmCode,
};
