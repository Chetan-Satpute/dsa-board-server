import {RequestHandler} from 'express';

import {createFrame} from '$lib/frame';
import {structureClassMap} from '$lib/index';
import {StructureId} from '$lib/types';

const getRandomController: RequestHandler<{structureId: StructureId}> = (
  req,
  res
) => {
  const {structureId} = req.params;

  const StructClass = structureClassMap[structureId];

  const struct = StructClass.random();
  const structureFrame = createFrame();
  const structureData = struct.toString();

  struct.toFrame(structureFrame);

  return res.send({structureFrame, structureData});
};

export default getRandomController;
