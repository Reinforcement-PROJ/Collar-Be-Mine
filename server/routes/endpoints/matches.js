import express, { Router } from 'express';
import log from '../../logger/index.js';
import pg from 'pg';
import checkForLove from '../../middleware/checkForLove.js';

const router = express.Router();

router.route('/matches')
  // check if there is currently an entry between the 2 parties, if so - check for status (turn status to true) if not then create new entry
  .post(checkForLove, (req, res) => {
    log.info(`Received ${req.method} request at terminal '${req.baseUrl}${req.url}' endpoint`)
    res.sendStatus(200)
  })





export default router

