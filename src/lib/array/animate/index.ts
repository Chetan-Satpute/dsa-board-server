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
import {
  quickSortAlgorithm,
  quickSortAlgorithmCode,
  quickSortAlgorithmFunction,
} from './quickSort';
import {
  mergeSortAlgorithm,
  mergeSortAlgorithmCode,
  mergeSortAlgorithmFunction,
} from './mergeSort';

export const arrayAnimateAlgorithms: Algorithm[] = [
  linearSearchAlgorithm,
  binarySearchAlgorithm,
  bubbleSortAlgorithm,
  selectionSortAlgorithm,
  insertionSortAlgorithm,
  quickSortAlgorithm,
  mergeSortAlgorithm,
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
  [quickSortAlgorithm.id]: quickSortAlgorithmFunction,
  [mergeSortAlgorithm.id]: mergeSortAlgorithmFunction,
};

export const arrayAnimateAlgorithmCode: Record<AlgorithmId, string> = {
  [linearSearchAlgorithm.id]: linearSearchAlgorithmCode,
  [binarySearchAlgorithm.id]: binarySearchAlgorithmCode,
  [bubbleSortAlgorithm.id]: bubbleSortAlgorithmCode,
  [selectionSortAlgorithm.id]: selectionSortAlgorithmCode,
  [insertionSortAlgorithm.id]: insertionSortAlgorithmCode,
  [quickSortAlgorithm.id]: quickSortAlgorithmCode,
  [mergeSortAlgorithm.id]: mergeSortAlgorithmCode,
};
