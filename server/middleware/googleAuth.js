// get google user
import log from '../logger/index.js';
import fetch from 'node-fetch';

export default async (req, res, next) => {
  log.info(`Received ${req.method} request at 'googleAuth' middleware`);
  try {
    log.info(req.body.accessToken);
    const header = `Bearer ${req.body.accessToken}`;
    const result = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${req.body.accessToken}`
    );

    const data = await result.json();

    res.locals.googleUser = {
      display_name: data.name,
      email: data.email,
    };
    log.info('Retrieved user profile from Google');
    return next();
  } catch (err) {
    return next({
      log: 'Error in googleAuth middleware',
      status: 400,
      message: {
        err: `Unable to fulfill request at '${req.baseUrl}${req.url}' endpoint: ${err}`,
      },
    });
  }
};
