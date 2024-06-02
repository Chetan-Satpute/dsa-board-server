import Board from '$lib/board';
import {Color} from '$lib/color';
import Node from '$lib/node';
import {Algorithm, AnimateAlgorithmFunction} from '$lib/types';
import {CustomError} from '$lib/utils';
import NodeArray from '..';

export const mergeSortAlgorithmFunction: AnimateAlgorithmFunction = (
  board,
  struct
) => {
  if (!(struct instanceof NodeArray)) {
    throw new CustomError();
  }

  mergeSort(board, struct);
};

function mergeSort(board: Board, array: NodeArray) {
  board.pushStack(
    `mergeSort(array=[${array.array.map(node => node.value).join(',')}])`
  );
  board.pushStep([1]);

  board.pushStep([2]);
  if (array.array.length <= 1) {
    board.pushStep([3]);
    board.pushStep([24]);
    return;
  }

  board.pushStep([6]);
  const mid = Math.floor(array.array.length / 2);

  const leftArray = new NodeArray();
  leftArray.moveTo(array.x, array.y + Node.NODE_HEIGHT * 2);
  board.add(leftArray);
  board.pushStep([8]);

  board.pushStep([9]);
  for (let i = 0; i < mid; i++) {
    const node = new Node(array.array[i].value);
    node.color = Color.Purple;

    leftArray.array.push(node);
    leftArray.rearrange();
    board.pushStep([10]);

    node.color = Color.Transparent;
    board.pushStep([9]);
  }

  const rightArray = new NodeArray();
  rightArray.moveTo(
    array.array[mid].x,
    array.array[mid].y + Node.NODE_HEIGHT * 2
  );
  board.add(rightArray);
  board.pushStep([13]);

  board.pushStep([14]);
  for (let i = mid; i < array.array.length; i++) {
    const node = new Node(array.array[i].value);
    node.color = Color.Purple;

    rightArray.array.push(node);
    rightArray.rearrange();
    board.pushStep([15]);

    node.color = Color.Transparent;
    board.pushStep([14]);
  }

  board.pushStep([18]);
  mergeSort(board, leftArray);
  board.popStack();

  board.pushStep([19]);
  mergeSort(board, rightArray);
  board.popStack();

  board.pushStep([21]);
  merge(board, array, leftArray, rightArray);
  board.popStack();

  for (const node of array.array) node.color = Color.Green;
  board.pushStep([23]);

  for (const node of array.array) node.color = Color.Transparent;
  board.pushStep([24]);
  return;
}

function merge(
  board: Board,
  array: NodeArray,
  leftArray: NodeArray,
  rightArray: NodeArray
) {
  board.pushStack(
    `merge(array=[${array.array
      .map(node => node.value)
      .join(',')}], leftArray=[${leftArray.array
      .map(node => node.value)
      .join(',')}], rightArray=[${rightArray.array
      .map(node => node.value)
      .join(',')}])`
  );
  board.pushStep([26]);

  let arrayIndex = 0;
  array.array[arrayIndex].color = Color.Purple;
  board.pushStep([27]);

  let leftIndex = 0;
  leftArray.array[leftIndex].color = Color.Blue;
  board.pushStep([29]);

  let rightIndex = 0;
  rightArray.array[rightIndex].color = Color.Blue;
  board.pushStep([30]);

  board.pushStep([32]);
  while (
    leftIndex < leftArray.array.length &&
    rightIndex < rightArray.array.length
  ) {
    board.pushStep([33]);
    if (leftArray.array[leftIndex].value < rightArray.array[rightIndex].value) {
      array.array[arrayIndex].value = leftArray.array[leftIndex].value;
      board.pushStep([34]);

      array.array[arrayIndex].color = Color.Transparent;
      leftArray.array[leftIndex].color = Color.Transparent;
      arrayIndex++, leftIndex++;
      if (arrayIndex < array.array.length)
        array.array[arrayIndex].color = Color.Purple;
      if (leftIndex < leftArray.array.length)
        leftArray.array[leftIndex].color = Color.Blue;
      board.pushStep([36]);
    } else {
      array.array[arrayIndex].value = rightArray.array[rightIndex].value;
      board.pushStep([38]);

      array.array[arrayIndex].color = Color.Transparent;
      rightArray.array[rightIndex].color = Color.Transparent;
      arrayIndex++, rightIndex++;
      if (arrayIndex < array.array.length)
        array.array[arrayIndex].color = Color.Purple;
      if (rightIndex < rightArray.array.length)
        rightArray.array[rightIndex].color = Color.Blue;
      board.pushStep([40]);
    }

    board.pushStep([32]);
  }

  board.pushStep([44]);
  while (leftIndex < leftArray.array.length) {
    array.array[arrayIndex].value = leftArray.array[leftIndex].value;
    board.pushStep([45]);

    array.array[arrayIndex].color = Color.Transparent;
    leftArray.array[leftIndex].color = Color.Transparent;
    arrayIndex++, leftIndex++;
    if (arrayIndex < array.array.length)
      array.array[arrayIndex].color = Color.Purple;
    if (leftIndex < leftArray.array.length)
      leftArray.array[leftIndex].color = Color.Blue;
    board.pushStep([47]);
  }

  board.pushStep([50]);
  while (rightIndex < rightArray.array.length) {
    array.array[arrayIndex].value = rightArray.array[rightIndex].value;
    board.pushStep([51]);

    array.array[arrayIndex].color = Color.Transparent;
    rightArray.array[rightIndex].color = Color.Transparent;
    arrayIndex++, rightIndex++;
    if (arrayIndex < array.array.length)
      array.array[arrayIndex].color = Color.Purple;
    if (rightIndex < rightArray.array.length)
      rightArray.array[rightIndex].color = Color.Blue;
    board.pushStep([53]);
  }

  board.pushStep([56]);
  board.remove(leftArray);
  board.remove(rightArray);
  board.pushStep([57]);
  return;
}

export const mergeSortAlgorithm: Algorithm = {
  id: 'merge-sort',
  name: 'Merge Sort',
  parameters: [],
};

export const mergeSortAlgorithmCode = `
function mergeSort(array) {
  if (array.length <= 1) {
    return;
  }

  const mid = Math.floor(array.length / 2);

  const leftArray = [];
  for (let i = 0; i < mid; i++) {
    leftArray.push(array[i]);
  }

  const rightArray = [];
  for (let i = mid; i < array.length; i++) {
    rightArray.push(array[i]);
  }

  mergeSort(leftArray);
  mergeSort(rightArray);

  merge(array, leftArray, rightArray);

  return;
}

function merge(array, leftArray, rightArray) {
  let arrayIndex = 0;
  
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      array[arrayIndex] = leftArray[leftIndex];

      arrayIndex++, leftIndex++;
    } else {
      array[arrayIndex] = rightArray[rightIndex];

      arrayIndex++, rightIndex++;
    }
  }

  while (leftIndex < leftArray.length) {
    array[arrayIndex] = leftArray[leftIndex];

    arrayIndex++, leftIndex++;
  }

  while (rightIndex < rightArray.length) {
    array[arrayIndex] = rightArray[rightIndex];

    arrayIndex++, rightIndex++;
  }

  return;
}
`;
