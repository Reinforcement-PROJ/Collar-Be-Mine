const path = require('path');
const express = require('express');
const cors = require('cors');
const ApiRouter = require('./routes/apiRouter');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// router & controller imports

const port = Number(process.env.EXPRESS_PORT);

// serve static files

// route to api
app.use('/', ApiRouter);
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

app.listen(port);
console.log(`Collar Be Mine is up and running on port: ${port}`);
