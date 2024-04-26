import {structureClassMap} from '.';
import {StructureId} from './types';

export function isStructureId(id: string): id is StructureId {
  return id in structureClassMap;
}

export class CustomError extends Error {}
