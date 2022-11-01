import express, { Router } from 'express';
import log from '../logger/index.js';

const router = express.Router();

log.info('Inside routers');
// add all the endpoint
// router.use('/oauth/google')
//   .post()

export default router;
