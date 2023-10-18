// Requires
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Cookies
const cookieController = require('./controllers/cookieController');

// Import routes
const userRouter = require('./routers/userRouter');
const birdRouter = require('./routers/birdRouter');
const birdgendaRouter = require('./routers/birdgendaRouter');

// Static files
app.use('/styles.css', express.static(path.resolve(__dirname, '..', 'dist', 'client/styles/styles.css')));

//Home Page
app.get('/', cookieController.setSSIDCookie, (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client/index.html'));
});

// Routers
app.use('/birds', birdRouter);
app.use('/birdgenda', birdgendaRouter);
app.use('/user', userRouter);

// Default error handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultError, err);
  console.log(errorObj.log);
  res.status(errorObj.status).send(errorObj.message);
});

// Server started
app.listen(process.env.PORT, () => {
  console.log('Server started on port 3000');
});

module.exports = app;
