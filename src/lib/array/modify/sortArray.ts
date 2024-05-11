import {Algorithm, ModifyAlgorithmFunction} from '$lib/types';
import {CustomError} from '$lib/utils';

import NodeArray from '..';

export const sortArrayAlgorithmFunction: ModifyAlgorithmFunction = struct => {
  if (!(struct instanceof NodeArray)) {
    throw new CustomError();
  }

  sortArray(struct);
};

function sortArray(array: NodeArray) {
  array.array.sort((nodeA, nodeB) => nodeA.value - nodeB.value);
  array.rearrange();
}

export const sortArrayAlgorithm: Algorithm = {
  id: 'sort-array',
  name: 'Sort Array',
  parameters: [],
};
