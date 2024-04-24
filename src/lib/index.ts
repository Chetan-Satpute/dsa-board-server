import NodeArray from './array';
import Structure from './structure';

export const structureClassMap: Record<string, typeof Structure> = {
  array: NodeArray,
};
