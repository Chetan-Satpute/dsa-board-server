import {
  animateAlgorithmFunctionMap,
  modifyAlgorithmFunctionMap,
} from '$lib/index';
import {StructureId} from '$lib/types';
import {RequestHandler} from 'express';

function checkAlgorithmId(type: 'animate' | 'modify'): RequestHandler<{
  structureId: StructureId;
  algorithmId: string;
}> {
  return (req, res, next) => {
    const {structureId, algorithmId} = req.params;

    if (type === 'animate') {
      if (algorithmId in animateAlgorithmFunctionMap[structureId])
        return next();
    } else {
      if (algorithmId in modifyAlgorithmFunctionMap[structureId]) return next();
    }

    res.statusCode = 404;
    return res.send({message: 'Algorithm not found'});
  };
}

export default checkAlgorithmId;
