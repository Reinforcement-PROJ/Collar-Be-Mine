import express, { Router } from 'express';
import log from '../../logger/index.js';
import pg from 'pg';
import { dogList, newDog } from '../../middleware/index.js';
const router = express.Router();

router
  .route('/dogs')
  // get list of local dogs
  .get(dogList, async (req, res) => {
    log.info(
      `Received ${req.method} request at terminal '${req.baseUrl}${req.url}' endpoint`
    );
    log.info(res.locals.dogList);
    res.status(200).json(res.locals.dogList);
  })
  // create new dog
  .post(newDog, async (req, res) => {
    log.info(
      `Received ${req.method} request at terminal '${req.baseUrl}${req.url}' endpoint`
    );
    res.status(200).send('successfully created new dog in db');
  });

export default router;
