import Board from '$lib/board';
import {Color} from '$lib/color';
import {Algorithm, AnimateAlgorithmFunction} from '$lib/types';
import {CustomError} from '$lib/utils';
import NodeArray from '..';

export const insertionSortAlgorithmFunction: AnimateAlgorithmFunction = (
  board,
  struct
) => {
  if (!(struct instanceof NodeArray)) {
    throw new CustomError();
  }

  insertionSort(board, struct);
};

function insertionSort(board: Board, array: NodeArray) {
  board.pushStack('insertionSort(array)');
  board.pushStep([1]);

  board.pushStep([2]);
  for (let i = 0; i < array.array.length; i++) {
    let j = i;
    array.array[j].color = Color.Purple;

    board.pushStep([3]);
    for (j = i; j > 0; j--) {
      board.pushStep([4]);
      if (array.array[j].value < array.array[j - 1].value) {
        // swap array[j] and array[j - 1]
        [array.array[j].value, array.array[j - 1].value] = [
          array.array[j - 1].value,
          array.array[j].value,
        ];
        [array.array[j].color, array.array[j - 1].color] = [
          array.array[j - 1].color,
          array.array[j].color,
        ];
        board.pushStep([6]);
      } else {
        board.pushStep([8]);
        break;
      }

      board.pushStep([3]);
    }

    array.array[j].color = Color.Green;
    board.pushStep([2]);
  }

  for (const node of array.array) node.color = Color.Green;
  board.pushStep([13]);

  for (const node of array.array) node.color = Color.Transparent;
  board.pushStep([14]);
  return;
}

export const insertionSortAlgorithm: Algorithm = {
  id: 'insertion-sort',
  name: 'Insertion Sort',
  parameters: [],
};

export const insertionSortAlgorithmCode = `
function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        // swap array[j] and array[j - 1]
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      } else {
        break;
      }
    }
  }

  return;
}
`;
