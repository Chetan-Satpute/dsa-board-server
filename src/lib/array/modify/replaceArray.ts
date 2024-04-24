import yup from 'yup';

import {Algorithm, AlgorithmFunction, AlgorithmParameterType} from '$lib/types';
import NodeArray from '..';
import Node from '$lib/node';

const argsSchema = yup.object({
  values: yup.array().required().of(yup.number().required()),
});

export const replaceArrayAlgorithmFunction: AlgorithmFunction = (
  _board,
  struct,
  args
) => {
  if (!(struct instanceof NodeArray)) {
    throw Error();
  }

  try {
    const validatedArgs = argsSchema.validateSync(args);
    const {values} = validatedArgs;

    replaceArray(struct, values);
  } catch {
    throw Error();
  }
};

function replaceArray(array: NodeArray, values: number[]) {
  array.array = values.map(val => new Node(val));
  array.rearrange();
}

export const replaceArrayAlgorithm: Algorithm = {
  id: 'replace-array',
  name: 'Replace Array',
  parameters: [{title: 'values', type: AlgorithmParameterType.NumberArray}],
};
