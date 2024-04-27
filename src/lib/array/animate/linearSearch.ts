import {
  Algorithm,
  AlgorithmParameterType,
  AnimateAlgorithmFunction,
} from '$lib/types';
import {CustomError} from '$lib/utils';
import NodeArray from '..';

export const linearSearchAlgorithmFunction: AnimateAlgorithmFunction = (
  board,
  struct,
  args
) => {
  if (!(struct instanceof NodeArray)) {
    throw new CustomError();
  }
};

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
