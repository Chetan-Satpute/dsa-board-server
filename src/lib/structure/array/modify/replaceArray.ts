import Structure from '../..';
import Board from '../../../board';
import {
  Algorithm,
  AlgorithmArgument,
  AlgorithmParameterType,
} from '../../../types';

export function replaceArray(
  board: Board,
  structure: Structure,
  args: Record<string, AlgorithmArgument>
) {
  console.log(board, structure, args);
}

export const replaceArrayInfo: Algorithm = {
  id: 'replace-array',
  name: 'Replace Array',
  parameters: [{title: 'values', type: AlgorithmParameterType.NumberArray}],
  animated: false,
};
