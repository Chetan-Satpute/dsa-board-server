import {isStructureId} from '$lib/utils';
import {RequestHandler} from 'express';

const checkStructure: RequestHandler<{structureId: string}> = (
  req,
  res,
  next
) => {
  const {structureId} = req.params;

  if (!isStructureId(structureId)) {
    res.statusCode = 404;
    return res.send({message: 'Structure not found'});
  }

  return next();
};

export default checkStructure;
