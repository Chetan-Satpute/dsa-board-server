import {Algorithm, ModifyAlgorithmFunction} from '$lib/types';
import {CustomError} from '$lib/utils';
import BinarySearchTree from '..';

export const randomBinarySearchTreeAlgorithmFunction: ModifyAlgorithmFunction =
  struct => {
    if (!(struct instanceof BinarySearchTree)) {
      throw new CustomError();
    }

    randomBinarySearchTree(struct);
  };

function randomBinarySearchTree(bst: BinarySearchTree) {
  const randomBST = BinarySearchTree.random();

  bst.root = randomBST.root;
  bst.rearrange();
}

export const randomBinarySearchTreeAlgorithm: Algorithm = {
  id: 'random-binary-search-tree',
  name: 'Random Tree',
  parameters: [],
};
