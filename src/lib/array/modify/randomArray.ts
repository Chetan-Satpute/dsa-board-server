import Node from '$lib/node';
import {Algorithm, ModifyAlgorithmFunction} from '$lib/types';
import {CustomError} from '$lib/utils';
import {createRandomNumberArray} from '$utils/index';

import NodeArray from '..';

export const randomArrayAlgorithmFunction: ModifyAlgorithmFunction = struct => {
  if (!(struct instanceof NodeArray)) {
    throw new CustomError();
  }

  randomArray(struct);
};

function randomArray(array: NodeArray) {
  const values = createRandomNumberArray();

  array.array = values.map(value => new Node(value));
  array.rearrange();
}

export const randomArrayAlgorithm: Algorithm = {
  id: 'random-array',
  name: 'Random Array',
  parameters: [],
};
