import Structure from './structure';
import NodeArray from './structure/array';

export type StructureName = 'array';
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
