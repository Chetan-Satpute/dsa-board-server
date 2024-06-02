import yup from 'yup';

import {
  Algorithm,
  AlgorithmParameterType,
  ModifyAlgorithmFunction,
} from '$lib/types';
import {CustomError} from '$lib/utils';
import BinarySearchTree from '..';

const argsSchema = yup.object({
  value: yup.number().required(),
});

export const insertBinarySearchTreeAlgorithmFunction: ModifyAlgorithmFunction =
  (struct, args) => {
    if (!(struct instanceof BinarySearchTree)) {
      throw new CustomError();
    }

    try {
      const validatedArgs = argsSchema.validateSync(args);
      const {value} = validatedArgs;

      insertBinarySearchTree(struct, value);
    } catch (err) {
      throw new CustomError();
    }
  };

function insertBinarySearchTree(bst: BinarySearchTree, value: number) {
  bst.insert(value);
}

export const insertBinarySearchTreeAlgorithm: Algorithm = {
  id: 'insert-binary-search-tree',
  name: 'Insert Value',
  parameters: [
    {
      title: 'value',
      type: AlgorithmParameterType.Number,
    },
  ],
};
