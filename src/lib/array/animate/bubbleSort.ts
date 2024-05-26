import Board from '$lib/board';
import {Color} from '$lib/color';
import {Algorithm, AnimateAlgorithmFunction} from '$lib/types';
import {CustomError} from '$lib/utils';
import NodeArray from '..';

export const bubbleSortAlgorithmFunction: AnimateAlgorithmFunction = (
  board,
  struct
) => {
  if (!(struct instanceof NodeArray)) {
    throw new CustomError();
  }

  bubbleSort(board, struct);
};

function bubbleSort(board: Board, array: NodeArray) {
  board.pushStack('bubbleSort(array)');
  board.pushStep([1]);

  let swapped = false;
  board.pushStep([2]);

  board.pushStep([4]);
  do {
    board.pushStep([5]);
    swapped = false;

    board.pushStep([7]);
    for (let i = 0; i < array.array.length - 1; i++) {
      array.array[i].color = Color.Purple;
      array.array[i + 1].color = Color.Purple;
      board.pushStep([8]);
      if (array.array[i].value > array.array[i + 1].value) {
        // swap array.array[i] and array.array[i + 1]
        [array.array[i].value, array.array[i + 1].value] = [
          array.array[i + 1].value,
          array.array[i].value,
        ];
        board.pushStep([10]);

        board.pushStep([12]);
        swapped = true;
      }

      array.array[i].color = Color.Transparent;
      array.array[i + 1].color = Color.Transparent;
      board.pushStep([7]);
    }

    board.pushStep([15]);
    if (swapped) board.pushStep([4]);
  } while (swapped);

  for (const node of array.array) node.color = Color.Green;
  board.pushStep([17]);

  for (const node of array.array) node.color = Color.Transparent;
  board.pushStep([18]);
  return;
}

export const bubbleSortAlgorithm: Algorithm = {
  id: 'bubble-sort',
  name: 'Bubble Sort',
  parameters: [],
};

export const bubbleSortAlgorithmCode = `
function bubbleSort(array) {
  let swapped = false;

  do {
    swapped = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        // swap array[i] and array[i + 1]
        [array[i], array[i + 1]] = [array[i + 1], array[i]];

        swapped = true;
      }
    }
  } while (swapped);

  return;
}
`;
