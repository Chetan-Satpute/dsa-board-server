import {RequestHandler} from 'express';

import {Step} from '$lib/step';
import StepStorage from '$services/Storage';

const getStepsController: RequestHandler<{runId: string; page: number}> = (
  req,
  res
) => {
  const {runId, page} = req.params;

  if (!runId || !page) {
    res.statusCode = 400;
    return res.send({message: 'Bad Request'});
  }

  try {
    const totalSteps = StepStorage.getStepCount(runId);
    const lastStepIndex = Math.min(totalSteps, page * 10 + 10);

    const steps: Step[] = [];

    for (let i = page * 10; i < totalSteps && i < lastStepIndex; i++) {
      steps.push(StepStorage.getStep(runId, i));
    }

    return res.send({steps});
  } catch {
    res.statusCode = 404;
    return res.send({message: 'Run not found'});
  }
};

export default getStepsController;
