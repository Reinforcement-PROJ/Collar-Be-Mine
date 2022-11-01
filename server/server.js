import path from 'path';
import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import dotenv from 'dotenv';
import log from './logger/index.js';
// import for sesssion
import session from 'express-session';
import connectRedis from 'connect-redis';
import Redis from 'ioredis';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// router & controller imports

const port = process.env.PORT;
// serve static files

// setup UpStash Client + Redis Store
const RedisStore = connectRedis(session);
const client = new Redis(
  `rediss://:${process.env.REDIS_PASSWORD}@${process.env.REDIS_URL}:${process.env.REDIS_PORT}`
);

app.use(
  session({
    store: new RedisStore({ client }),
    secret: process.env.REDIS_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: 'auto',
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'lax',
    },
  })
);


// route to api
app.use('/api', Object.values(router));
// catch all unknown route handler
app.use('*', (req, res) => res.status(404).send('Wrong page yo'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Global Error Handler Caught',
    status: 400,
    message: { err: 'Error Occured' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  log.info(`Collar Be Mine is up and running on port: ${port}`);
});
