import {RequestHandler} from 'express';

import {structureInfo} from '$lib/index';

const getStructuresController: RequestHandler = (_req, res) => {
  const structures = structureInfo;

  res.send({structures});
};

export default getStructuresController;
