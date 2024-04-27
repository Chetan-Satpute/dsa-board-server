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
