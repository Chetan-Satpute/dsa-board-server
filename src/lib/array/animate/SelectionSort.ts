import Board from '$lib/board';
import {Color} from '$lib/color';
import {Algorithm, AnimateAlgorithmFunction} from '$lib/types';
import {CustomError} from '$lib/utils';
import NodeArray from '..';

export const selectionSortAlgorithmFunction: AnimateAlgorithmFunction = (
  board,
  struct
) => {
  if (!(struct instanceof NodeArray)) {
    throw new CustomError();
  }

  selectionSort(board, struct);
};

function selectionSort(board: Board, array: NodeArray) {
  board.pushStack('selectionSort(array)');
  board.pushStep([1]);

  board.pushStep([2]);
  for (let i = array.array.length - 1; i >= 0; i--) {
    array.array[i].color = Color.Purple;
    board.pushStep([3]);
    for (let j = 0; j < i; j++) {
      array.array[j].color = Color.Blue;
      board.pushStep([4]);
      if (array.array[i].value < array.array[j].value) {
        // swap array[i] and array[j]
        [array.array[i].value, array.array[j].value] = [
          array.array[j].value,
          array.array[i].value,
        ];
        board.pushStep([6]);
      }

      array.array[j].color = Color.Transparent;
      board.pushStep([3]);
    }

    array.array[i].color = Color.Green;
    board.pushStep([2]);
  }

  for (const node of array.array) node.color = Color.Green;
  board.pushStep([11]);

  for (const node of array.array) node.color = Color.Transparent;
  board.pushStep([12]);
  return;
}

export const selectionSortAlgorithm: Algorithm = {
  id: 'selection-sort',
  name: 'Selection Sort',
  parameters: [],
};

export const selectionSortAlgorithmCode = `
function selectionSort(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        // swap array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  return;
}
`;
