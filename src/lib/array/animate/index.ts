import {Algorithm, AnimateAlgorithmFunction, AlgorithmId} from '$lib/types';
import {
  selectionSortAlgorithm,
  selectionSortAlgorithmCode,
  selectionSortAlgorithmFunction,
} from './selectionSort';
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
import {
  insertionSortAlgorithm,
  insertionSortAlgorithmCode,
  insertionSortAlgorithmFunction,
} from './insertionSort';

export const arrayAnimateAlgorithms: Algorithm[] = [
  linearSearchAlgorithm,
  binarySearchAlgorithm,
  bubbleSortAlgorithm,
  selectionSortAlgorithm,
  insertionSortAlgorithm,
];

export const arrayAnimateAlgorithmFunctionMap: Record<
  AlgorithmId,
  AnimateAlgorithmFunction
> = {
  [linearSearchAlgorithm.id]: linearSearchAlgorithmFunction,
  [binarySearchAlgorithm.id]: binarySearchAlgorithmFunction,
  [bubbleSortAlgorithm.id]: bubbleSortAlgorithmFunction,
  [selectionSortAlgorithm.id]: selectionSortAlgorithmFunction,
  [insertionSortAlgorithm.id]: insertionSortAlgorithmFunction,
};

export const arrayAnimateAlgorithmCode: Record<AlgorithmId, string> = {
  [linearSearchAlgorithm.id]: linearSearchAlgorithmCode,
  [binarySearchAlgorithm.id]: binarySearchAlgorithmCode,
  [bubbleSortAlgorithm.id]: bubbleSortAlgorithmCode,
  [selectionSortAlgorithm.id]: selectionSortAlgorithmCode,
  [insertionSortAlgorithm.id]: insertionSortAlgorithmCode,
};
