import {createFrame} from '$lib/frame';
import {structureClassMap} from '$lib/index';
import {verifyStructureId} from '$lib/utils';
import {RequestHandler} from 'express';

const getRandomStructureController: RequestHandler<{
  structureId: string;
}> = (req, res) => {
  const {structureId} = req.params;

  if (!verifyStructureId(structureId)) {
    res.statusCode = 404;
    res.send({message: 'Structure not found'});
  }

  const StructClass = structureClassMap[structureId];

  const struct = StructClass.random();
  const structureFrame = createFrame();
  const structureData = struct.toString();

  struct.toFrame(structureFrame);

  return res.send({structureFrame, structureData});
};

export default getRandomStructureController;
