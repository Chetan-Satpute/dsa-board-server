import {Algorithm, AlgorithmId, ModifyAlgorithmFunction} from '$lib/types';
import {
  randomBinarySearchTreeAlgorithm,
  randomBinarySearchTreeAlgorithmFunction,
} from './randomBinarySearchTree';

export const bstModifyAlgorithms: Algorithm[] = [
  randomBinarySearchTreeAlgorithm,
];

export const bstModifyAlgorithmFunctionMap: Record<
  AlgorithmId,
  ModifyAlgorithmFunction
> = {
  [randomBinarySearchTreeAlgorithm.id]: randomBinarySearchTreeAlgorithmFunction,
};
