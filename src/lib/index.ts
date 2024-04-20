import Structure from './structure';
import NodeArray from './structure/array';
import {arrayAnimateAlgorithmInfo} from './structure/array/animate';
import {arrayModifyAlgorithmInfo} from './structure/array/modify';
import {Algorithm, StructureName} from './types';

export function isStructureName(name: string): name is StructureName {
  switch (true) {
    case name === 'array':
      return true;
    default:
      return false;
  }
}

export const structureGeneratorMap: Record<StructureName, () => Structure> = {
  array: NodeArray.getRandom,
};

export function getRandomStructureByName(name: StructureName) {
  return structureGeneratorMap[name]();
}

export const modifyAlgorithmsInfo: Record<StructureName, Algorithm[]> = {
  array: arrayModifyAlgorithmInfo,
};

export const animateAlgorithmsInfo: Record<StructureName, Algorithm[]> = {
  array: arrayAnimateAlgorithmInfo,
};
