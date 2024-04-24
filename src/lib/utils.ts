import {AlgorithmFunction} from '$lib/types';
import {structureClassMap} from '.';

export function verifyStructureId(id: string): boolean {
  return structureClassMap[id] !== undefined;
}

export function verifyAlgorithmId(
  id: string,
  algorithmFunctionMap: Record<string, AlgorithmFunction>
): boolean {
  return algorithmFunctionMap[id] !== undefined;
}
