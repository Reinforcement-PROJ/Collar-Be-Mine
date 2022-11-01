import * as pg from 'pg';
const { Pool } = pg.default;
import dotenv from 'dotenv';
import log from '../logger/index.js';
dotenv.config();

const PG_URI = process.env.DATABASE_URL;

// const pool = new Pool({
//   connectionString: PG_URI,
// });
const databaseConfig = { connectionString: PG_URI };

const pool = new Pool(databaseConfig)

export const db = {
  query: (text, params, callback) => {
    log.info(`Executed Query: ${text}`);
    return pool.query(text, params, callback);
  },
};
