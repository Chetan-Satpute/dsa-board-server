import Board from '$lib/board';
import {Color} from '$lib/color';
import {Algorithm, AnimateAlgorithmFunction} from '$lib/types';
import {CustomError} from '$lib/utils';
import NodeArray from '..';

export const quickSortAlgorithmFunction: AnimateAlgorithmFunction = (
  board,
  struct
) => {
  if (!(struct instanceof NodeArray)) {
    throw new CustomError();
  }

  quickSort(board, struct);
};

function quickSort(board: Board, array: NodeArray) {
  board.pushStack('quickSort(array)');
  board.pushStep([1]);

  board.pushStep([2]);
  quickSortRecurse(board, array, 0, array.array.length);
  board.popStack();

  board.pushStep([4]);
  for (const node of array.array) node.color = Color.Transparent;
  board.pushStep([5]);
  return;
}

function quickSortRecurse(
  board: Board,
  array: NodeArray,
  start: number,
  end: number
) {
  board.pushStack(`quickSortRecurse(array, start=${start}, end=${end})`);
  board.pushStep([7]);

  board.pushStep([8]);
  if (start >= end) {
    board.pushStep([9]);
    board.pushStep([33]);
    return;
  }

  const target = end - 1;
  array.array[target].color = Color.Red;
  board.pushStep([12]);

  let pos = start - 1;
  board.pushStep([13]);

  board.pushStep([15]);
  for (let i = start; i < target; i++) {
    array.array[i].color = Color.Purple;
    board.pushStep([16]);
    if (array.array[i].value <= array.array[target].value) {
      if (pos >= start) array.array[pos].color = Color.Transparent;
      pos++;
      array.array[pos].color = Color.Blue;
      board.pushStep([17]);

      // swap array[pos] and array[i]
      [array.array[pos].value, array.array[i].value] = [
        array.array[i].value,
        array.array[pos].value,
      ];
      board.pushStep([20]);
    }

    if (i !== pos) array.array[i].color = Color.Transparent;
    board.pushStep([15]);
  }

  if (pos >= start) array.array[pos].color = Color.Transparent;
  pos++;
  array.array[pos].color = Color.Blue;
  board.pushStep([24]);

  // swap array[pos] and array[target]
  [array.array[pos].value, array.array[target].value] = [
    array.array[target].value,
    array.array[pos].value,
  ];
  board.pushStep([27]);

  array.array[target].color = Color.Transparent;
  array.array[pos].color = Color.Green;
  board.pushStep([29]);
  quickSortRecurse(board, array, start, pos);
  board.popStack();

  board.pushStep([30]);
  quickSortRecurse(board, array, pos + 1, end);
  board.popStack();

  board.pushStep([32]);
  board.pushStep([33]);
  return;
}

export const quickSortAlgorithm: Algorithm = {
  id: 'quick-sort',
  name: 'Quick Sort',
  parameters: [],
};

export const quickSortAlgorithmCode = `
function quickSort(array) {
  quickSortRecurse(array, 0, array.length);

  return;
}

function quickSortRecurse(array, start, end) {
  if (start >= end) {
    return;
  }

  const target = end - 1;
  let pos = start - 1;

  for (let i = start; i < target; i++) {
    if (array[i] <= array[target]) {
      pos++;

      // swap array[pos] and array[i]
      [array[pos], array[i]] = [array[i], array[pos]];
    }
  }

  pos++;

  // swap array[pos] and array[target]
  [array[pos], array[target]] = [array[target], array[pos]];

  quickSortRecurse(array, start, pos - 1);
  quickSortRecurse(array, pos + 1, end);

  return;
}
`;
