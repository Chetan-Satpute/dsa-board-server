import {animateAlgorithmCodeMap, animateAlgorithms} from '$lib/index';
import {AlgorithmId, StructureId} from '$lib/types';
import {RequestHandler} from 'express';

const getAnimateAlgorithmController: RequestHandler<{
  structureId: StructureId;
  algorithmId: AlgorithmId;
}> = (req, res) => {
  const {structureId, algorithmId} = req.params;

  const algorithm = animateAlgorithms[structureId].find(
    alg => alg.id === algorithmId
  );
  const code = animateAlgorithmCodeMap[structureId][algorithmId];

  if (!algorithm) {
    res.statusCode = 404;
    res.send({message: 'Algorithm not found'});
  }

  return res.send({algorithm, code});
};

export default getAnimateAlgorithmController;
