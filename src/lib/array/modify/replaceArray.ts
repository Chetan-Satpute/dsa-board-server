import yup from 'yup';

import {
  Algorithm,
  AlgorithmParameterType,
  ModifyAlgorithmFunction,
} from '$lib/types';
import NodeArray from '..';
import Node from '$lib/node';
import {CustomError} from '$lib/utils';

const argsSchema = yup.object({
  values: yup.array().required().of(yup.number().required()),
});

export const replaceArrayAlgorithmFunction: ModifyAlgorithmFunction = (
  struct,
  args
) => {
  if (!(struct instanceof NodeArray)) {
    throw new CustomError();
  }

  try {
    const validatedArgs = argsSchema.validateSync(args);
    const {values} = validatedArgs;

    replaceArray(struct, values);
  } catch (err) {
    throw new CustomError();
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
