import {RequestHandler} from 'express';

import Board from '$lib/board';
import {createFrame} from '$lib/frame';
import {animateAlgorithmFunctionMap, structureClassMap} from '$lib/index';
import {AlgorithmId, StructureId} from '$lib/types';
import {CustomError} from '$lib/utils';
import StepStorage from '$services/Storage';

const postAnimateController: RequestHandler<{
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
    const board = new Board();
    const struct = StructClass.fromString(body.structureData);
    board.add(struct);

    const algorithmFunction =
      animateAlgorithmFunctionMap[structureId][algorithmId];

    algorithmFunction(board, struct, body.arguments);

    const totalSteps = StepStorage.getStepCount(board.storeId);

    const structureFrame = createFrame();
    const structureData = struct.toString();

    struct.toFrame(structureFrame);

    return res.send({
      runId: board.storeId,
      totalSteps: totalSteps,

      structureFrame: structureFrame,
      structureData: structureData,
    });
  } catch (err) {
    if (err instanceof CustomError) {
      res.statusCode = 400;
      return res.send({message: 'Bad Request'});
    }

    console.log(err);

    res.statusCode = 500;
    return res.send({message: 'Internal Server Error!'});
  }
};

export default postAnimateController;
