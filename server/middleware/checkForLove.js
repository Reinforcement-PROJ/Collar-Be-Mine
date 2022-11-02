import log from '../logger/index.js';
import { db } from '../models/models.js';

export default async (req, res, next) => {
  log.info(`Received ${req.method} request at 'checkForLove' middleware`);
  const { dog1, dog2 } = req.body;
  // check if the match between dog1 and dog2 exist in DB
  const query = `SELECT * FROM "match" WHERE dog_one = '${dog1}' AND dog_two = '${dog2}';`;
  const result = await db.query(query);
  //  if it doesn't - make new entry to table
  if (!result.rows.length) {
    const querytoAdd = `INSERT into "match" (dog_one, dog_two, match_status) VALUES (${dog1}, ${dog2}, 'false'); `;
    const adding = await db.query(querytoAdd);
    log.info(`Added new entry to match`);
    return next();
    // return next?
  } else {
    // update command
    log.info('in here');
    const id = result.rows[0].match_id;

    const update = `UPDATE match SET match_status = true WHERE match_id = ${id};`
    const updateStatus = db.query(update);
    return next();
  }
  // if it does - we update the match_status to true
};
