import log from '../logger/index.js';
import jwt from 'jsonwebtoken';

export default async (req, res, next) => {
  log.info(`Received ${req.method} request at 'jwtCreator' middleware`);

  //define object
  const obj = { user: res.locals.userInfo, valid: true };

  // create a token
  res.locals.jwt = jwt.sign(obj, process.env.TOKEN_KEY, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });
  req.session.user = res.locals.jwt;
  next();
};

