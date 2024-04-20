import {Algorithm, AlgorithmFunction} from '../../../types';
import {replaceArray, replaceArrayInfo} from './replaceArray';

export const arrayModifyAlgorithmInfo: Algorithm[] = [replaceArrayInfo];

export const runModifyAlgorithm: Record<string, AlgorithmFunction> = {
  [replaceArrayInfo.id]: replaceArray,
};
