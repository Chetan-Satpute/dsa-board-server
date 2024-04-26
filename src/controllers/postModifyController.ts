import {RequestHandler} from 'express';

import {createFrame} from '$lib/frame';
import {modifyAlgorithmFunctionMap, structureClassMap} from '$lib/index';
import {AlgorithmId, StructureId} from '$lib/types';
import {CustomError} from '$lib/utils';

const postModifyController: RequestHandler<{
  structureId: StructureId;
  algorithmId: AlgorithmId;
}> = (req, res) => {
  const {structureId, algorithmId} = req.params;
  const body = req.body;

  const StructClass = structureClassMap[structureId];

  if (typeof body.structureData !== 'string') {
    res.statusCode = 400;
    return res.send({message: 'Structure data is required!'});
  }

  try {
    const struct = StructClass.fromString(body.structureData);

    const algorithmFunction =
      modifyAlgorithmFunctionMap[structureId][algorithmId];

    algorithmFunction(struct, body.arguments);

    const structureFrame = createFrame();
    const structureData = struct.toString();

    struct.toFrame(structureFrame);

    return res.send({structureFrame, structureData});
  } catch (err) {
    if (err instanceof CustomError) {
      res.statusCode = 400;
      return res.send({message: 'Bad Request'});
    }

    res.statusCode = 500;
    return res.send({message: 'Internal Server Error!'});
  }
};

export default postModifyController;
