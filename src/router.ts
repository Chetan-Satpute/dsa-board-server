import {Router} from 'express';

import getRandomController from '$controllers/getRandomController';
import getAlgorithmsController from '$controllers/getAlgorithmsController';
import postModifyController from '$controllers/postModifyController';

import checkAlgorithmId from '$middlewares/checkAlgorithmId';
import checkStructure from '$middlewares/checkStructureId';
import getAnimateAlgorithmController from '$controllers/getAnimateAlgorithmController';

const router = Router();

router.use('/:structureId', checkStructure);

router.get('/:structureId/random', getRandomController);
router.get('/:structureId/algorithms', getAlgorithmsController);
router.get(
  '/:structureId/animate/:algorithmId',
  checkAlgorithmId('animate'),
  getAnimateAlgorithmController
);
router.post(
  '/:structureId/modify/:algorithmId',
  checkAlgorithmId('modify'),
  postModifyController
);

export default router;
