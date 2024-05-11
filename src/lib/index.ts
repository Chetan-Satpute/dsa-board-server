import {ARRAY_IMAGE} from '../assets/imageData';
import NodeArray from './array';
import {
  arrayAnimateAlgorithmCode,
  arrayAnimateAlgorithmFunctionMap,
  arrayAnimateAlgorithms,
} from './array/animate';
import {
  arrayModifyAlgorithmFunctionMap,
  arrayModifyAlgorithms,
} from './array/modify';
import Structure from './structure';
import {
  Algorithm,
  AlgorithmId,
  AnimateAlgorithmFunction,
  ModifyAlgorithmFunction,
  StructureId,
} from './types';

export const structureClassMap: Record<StructureId, typeof Structure> = {
  [StructureId.Array]: NodeArray,
};

export const modifyAlgorithms: Record<StructureId, Algorithm[]> = {
  [StructureId.Array]: arrayModifyAlgorithms,
};

export const animateAlgorithms: Record<StructureId, Algorithm[]> = {
  [StructureId.Array]: arrayAnimateAlgorithms,
};

export const modifyAlgorithmFunctionMap: Record<
  StructureId,
  Record<string, ModifyAlgorithmFunction>
> = {
  [StructureId.Array]: arrayModifyAlgorithmFunctionMap,
};

export const animateAlgorithmFunctionMap: Record<
  StructureId,
  Record<string, AnimateAlgorithmFunction>
> = {
  [StructureId.Array]: arrayAnimateAlgorithmFunctionMap,
};

export const animateAlgorithmCodeMap: Record<
  StructureId,
  Record<AlgorithmId, string>
> = {
  [StructureId.Array]: arrayAnimateAlgorithmCode,
};

export interface StructureInfo {
  title: string;
  id: StructureId;
  image: string;
}

export const structureInfo: StructureInfo[] = [
  {
    id: StructureId.Array,
    title: 'Array',
    image: ARRAY_IMAGE,
  },
  /*
  {
    id: StructureId.BinarySearchTree,
    title: 'Binary Search Tree',
    image: BINARY_SEARCH_TREE_IMAGE,
  },
  {
    id: StructureId.LinkedList,
    title: 'Linked List',
    image: LINKED_LIST_IMAGE,
  },
  */
];
