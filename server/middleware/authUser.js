import log from '../logger/index.js';
import { db } from '../models/models.js';

export default async (req, res, next) => {
  log.info(`Received ${req.method} request at 'authUser' middleware`);
  const { email, display_name } = req.body;
  try {
    const query = `SELECT * FROM "users" WHERE email = '${email}';`;
    const result = await db.query(query);
    // if user exisit - sign in  if not - create new account
    if (!result.rows.length) {
      // query the db to create a new entry
      // res.locals.newAcct = false;
      const adding = `INSERT INTO "users" (email, display_name) VALUES ('${email}', '${display_name}');`;
      const entry = await db.query(adding);
      log.info('Account Created');
      return next();
    } else {
      res.locals.userInfo = result.rows[0];
      log.info('Got user info !');
      return next();
    }
  } catch (err) {
    return next({
      log: 'Error in AuthUser middleware',
      status: 400,
      message: {
        err: `Unable to fulfull request at '${req.baseUrl}${req.url}' endpoint: ${err}`,
      },
    });
  }
};
