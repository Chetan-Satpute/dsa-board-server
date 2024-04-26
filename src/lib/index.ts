import NodeArray from './array';
import {
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
  string,
  Record<string, ModifyAlgorithmFunction>
> = {
  [StructureId.Array]: arrayModifyAlgorithmFunctionMap,
};

export const animateAlgorithmFunctionMap: Record<
  string,
  Record<string, AnimateAlgorithmFunction>
> = {
  [StructureId.Array]: arrayAnimateAlgorithmFunctionMap,
};
