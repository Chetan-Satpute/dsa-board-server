import yup from 'yup';

import Board from '$lib/board';
import {
  Algorithm,
  AlgorithmParameterType,
  AnimateAlgorithmFunction,
} from '$lib/types';
import {CustomError} from '$lib/utils';
import NodeArray from '..';

const argsSchema = yup.object({
  target: yup.number().required(),
});

export const linearSearchAlgorithmFunction: AnimateAlgorithmFunction = (
  board,
  struct,
  args
) => {
  if (!(struct instanceof NodeArray)) {
    throw new CustomError();
  }

  try {
    const validatedArgs = argsSchema.validateSync(args);
    const {target} = validatedArgs;

    linearSearch(board, struct, target);
  } catch (err) {
    throw new CustomError();
  }
};

function linearSearch(board: Board, array: NodeArray, target: number) {
  board.pushStack(`linearSearch(array, target=${target})`);
  board.pushStep([1]);

  board.pushStep([2]);
  for (let i = 0; i < array.array.length; i++) {
    board.pushStep([3]);
    if (array.array[i].value === target) {
      board.pushStep([4]);
      return;
    }

    board.pushStep([2]);
  }

  board.pushStep([8]);
  return;
}

export const linearSearchAlgorithm: Algorithm = {
  id: 'linear-search',
  name: 'Linear Search',
  parameters: [{title: 'target', type: AlgorithmParameterType.Number}],
};

export const linearSearchAlgorithmCode = `
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return NaN;
}
`;
