import log from '../logger/index.js';
import { db } from '../models/models.js';

export default async (req, res, next) => {
  log.info(`Received ${req.method} request at 'dogList' middleware`);
  try {
    const query = `SELECT * FROM "dogs";`;
    const result = await db.query(query);
    res.locals.dogList = result.rows; // [0]?
    log.info('Got dogList info!');
    return next();
  } catch (err) {
    return next({
      log: 'Error in dogList middleware',
      status: 400,
      message: {
        err: `Unable to fulfull request at '${req.baseUrl}${req.url}' endpoint: ${err}`,
      },
    });
  }
};
