import type Board from '$lib/board';
import type Structure from '$lib/structure';

export interface Point {
  x: number;
  y: number;
}

export type StructureId = string;

export const enum AlgorithmParameterType {
  Number = 'number',
  NumberArray = 'number[]',
}

export interface AlgorithmParameter {
  type: AlgorithmParameterType;
  title: string;
}

export type AlgorithmId = string;
export type AlgorithmArgument = number | number[];

export interface Algorithm {
  id: AlgorithmId;
  name: string;
  parameters: AlgorithmParameter[];
}

export type AlgorithmFunction = (
  board: Board,
  structure: Structure,
  args: Record<string, AlgorithmArgument>
) => void;
