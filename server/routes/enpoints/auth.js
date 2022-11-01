import express, { Router } from 'express';
import log from '../../logger/index.js';
import pg from 'pg';
import { authUser, jwtCreator } from '../../middleware/index.js';
const router = express.Router();

router
  .route('/auth')
  // create / signIn
  .post(authUser, jwtCreator, async (req, res) => {
    log.info(
      `Received ${req.method} request at terminal '${req.baseUrl}${req.url}' endpoint`
    );
    log.info(res.locals.userInfo.user_id);
    res.status(200).json({ user_id: res.locals.userInfo.user_id });
    // query the database and either make new acct/ allow sign in
  });
export default router;
