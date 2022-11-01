import log from '../logger/index.js';
import { db } from '../models/models.js';

export default async (req, res, next) => {
  log.info(`Received ${req.method} request at 'newDog' middleware`);
  const { dog_id, user_id, owner_name, dog_name, dog_breed, dog_size, location, fav_activities, personal_bio, conversations_id, matches_id } = req.body;
  try {
    const addNewDog = `INSERT INTO "dogs" (user_id, owner_name, dog_name, dog_breed, dog_size, location, fav_activities, personal_bio, conversations_id, matches_id) VALUES ('${user_id}', '${owner_name}', '${dog_name}', '${dog_breed}', '${dog_size}', '${location}', '${fav_activities}', '${personal_bio}', '${conversations_id}', '${matches_id}');`;
    const entry = await db.query(addNewDog);
    log.info('New Dog Created');
    return next();
  } catch (err) {
    return next({
      log: 'Error in newDog middleware',
      status: 400,
      message: {
        err: `Unable to fulfill request at '${req.baseUrl}${req.url}' endpoint: ${err}`,
      },
    });
  }
};
