import express, { Router } from 'express';
import log from '../../logger/index.js';
import pg from 'pg';
import { dogList, newDog } from '../../middleware/index.js';
const router = express.Router(); // declare router

router
  .route('/dogs')
  // get list of all dogs with same location as user
  .get(/*dogList,*/ async (req, res) => {
    log.info(
      `Received ${req.method} request at terminal '${req.baseUrl}${req.url}' endpoint`
    );
    log.info(res.locals.nearbyDogs);
    res.status(200).json(res.locals.nearbyDogs);
  })

  // create a new dog upon user creation & form submission
  .post(/*newDog,*/ async (req, res) => {
    log.info(
      `Received ${req.method} request at terminal '${req.baseUrl}${req.url}' endpoint`
    );
    log.info(res.locals.newDog);
    res.status(200).json(res.locals.newDog);
  });

export default router;