import {RequestHandler} from 'express';

import {animateAlgorithms, modifyAlgorithms} from '$lib/index';
import {StructureId} from '$lib/types';

const getAlgorithmsController: RequestHandler<{structureId: StructureId}> = (
  req,
  res
) => {
  const {structureId} = req.params;

  const modify = modifyAlgorithms[structureId];
  const animate = animateAlgorithms[structureId];

  return res.send({modify, animate});
};

export default getAlgorithmsController;
