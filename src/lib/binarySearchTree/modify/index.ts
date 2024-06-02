import {Algorithm, AlgorithmId, ModifyAlgorithmFunction} from '$lib/types';
import {
  insertBinarySearchTreeAlgorithm,
  insertBinarySearchTreeAlgorithmFunction,
} from './insertBinarySearchTree';
import {
  randomBinarySearchTreeAlgorithm,
  randomBinarySearchTreeAlgorithmFunction,
} from './randomBinarySearchTree';

export const bstModifyAlgorithms: Algorithm[] = [
  randomBinarySearchTreeAlgorithm,
  insertBinarySearchTreeAlgorithm,
];

export const bstModifyAlgorithmFunctionMap: Record<
  AlgorithmId,
  ModifyAlgorithmFunction
> = {
  [randomBinarySearchTreeAlgorithm.id]: randomBinarySearchTreeAlgorithmFunction,
  [insertBinarySearchTreeAlgorithm.id]: insertBinarySearchTreeAlgorithmFunction,
};
