import Board from './board';
import Structure from './structure';

export interface Point {
  x: number;
  y: number;
}

export type StructureName = 'array';

export enum AlgorithmParameterType {
  Number = 'number',
  NumberArray = 'number[]',
}

export type AlgorithmArgument = number | number[];

export interface Algorithm {
  id: string;
  name: string;
  parameters: {title: string; type: AlgorithmParameterType}[];
}

export type AlgorithmFunction = (
  board: Board,
  structure: Structure,
  args: Record<string, AlgorithmArgument>
) => void;
