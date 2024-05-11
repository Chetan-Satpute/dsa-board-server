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

export const binarySearchAlgorithmFunction: AnimateAlgorithmFunction = (
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

    binarySearch(board, struct, target);
  } catch (err) {
    throw new CustomError();
  }
};

function binarySearch(board: Board, array: NodeArray, target: number) {
  board.pushStack(`binarySearch(array, target=${target})`);
  board.pushStep([1]);

  board.pushStep([2]);
  let start = 0;

  board.pushStep([3]);
  let end = array.array.length;

  board.pushStep([5]);
  while (start !== end) {
    board.pushStep([6]);
    const mid = start + Math.floor((end - start) / 2);

    array.array[mid].color = Color.Purple;
    board.pushStep([8]);
    if (array.array[mid].value === target) {
      for (const node of array.array) node.color = Color.Transparent;
      array.array[mid].color = Color.Green;
      board.pushStep([9]);

      array.array[mid].color = Color.Transparent;
      board.pushStep([20]);
      return mid;
    }

    array.array[mid].color = Color.Red;
    board.pushStep([12]);
    if (array.array[mid].value < target) {
      for (let i = start; i < mid; i++) array.array[i].color = Color.Red;
      board.pushStep([13]);
      start = mid + 1;
    } else {
      for (let i = mid + 1; i < end; i++) array.array[i].color = Color.Red;
      board.pushStep([15]);
      end = mid;
    }

    board.pushStep([5]);
  }

  board.pushStep([19]);

  for (const node of array.array) node.color = Color.Transparent;
  board.pushStep([20]);
  return;
}

export const binarySearchAlgorithm: Algorithm = {
  id: 'binary-search',
  name: 'Binary Search',
  parameters: [{title: 'target', type: AlgorithmParameterType.Number}],
};

export const binarySearchAlgorithmCode = `
function binarySearch(array, target) {
  let start = 0;
  let end = array.length;

  while (start !== end) {
    const mid = start + Math.floor((end - start) / 2);

    if (array[mid] === target) {
      return mid;
    }

    if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return NaN;
}
`;
