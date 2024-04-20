import {Algorithm, AlgorithmFunction} from '../../../types';
import {linearSearch, linearSearchInfo} from './linearSearch';

export const arrayAnimateAlgorithmInfo: Algorithm[] = [linearSearchInfo];

export const runAnimateAlgorithm: Record<string, AlgorithmFunction> = {
  [linearSearchInfo.id]: linearSearch,
};
