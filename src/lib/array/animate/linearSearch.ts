import yup from 'yup';

import Board from '$lib/board';
import {Color} from '$lib/color';
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
    array.array[i].color = Color.Purple;
    board.pushStep([3]);
    if (array.array[i].value === target) {
      array.array[i].color = Color.Green;
      board.pushStep([4]);

      array.array[i].color = Color.Transparent;
      board.pushStep([9]);
      return;
    }

    board.pushStep([2]);
    array.array[i].color = Color.Transparent;
  }

  for (const node of array.array) node.color = Color.Red;
  board.pushStep([8]);

  for (const node of array.array) node.color = Color.Transparent;
  board.pushStep([9]);
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
