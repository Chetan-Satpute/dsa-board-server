import {Router} from 'express';

import {getRandomStructureByName, isStructureName} from './lib';
import Board from './lib/board';

const apiRouter = Router();

apiRouter.get('/random/:struct', (req, res) => {
  const {struct: structName} = req.params;

  if (!isStructureName(structName)) {
    res.statusCode = 404;
    return res.send({message: `Structure not found: ${structName}`});
  }

  const struct = getRandomStructureByName(structName);

  const board = new Board();
  board.add(struct);

  const frame = board.getFrame();
  const structureData = struct.toData();

  return res.send({frame, structureData});
});

export default apiRouter;
