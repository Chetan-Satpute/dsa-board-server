import Structure from '../..';
import Board from '../../../board';
import {
  Algorithm,
  AlgorithmArgument,
  AlgorithmParameterType,
} from '../../../types';

export function linearSearch(
  board: Board,
  structure: Structure,
  args: Record<string, AlgorithmArgument>
) {
  console.log(board, structure, args);
}

export const linearSearchInfo: Algorithm = {
  id: 'linear-search',
  name: 'Linear Search',
  parameters: [{title: 'target', type: AlgorithmParameterType.Number}],
};
