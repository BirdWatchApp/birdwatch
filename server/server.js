const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());

// import routes
const userRouter = require('./routers/userRouter');
const birdRouter = require('./routers/birdRouter');
const birdgendaRouter = require('./routers/birdgendaRouter');

// Static files
app.use('/styles.css', express.static(path.resolve(__dirname, '..', 'dist', 'client/styles/styles.css')));

//Home Page:
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client/index.html'))
});

// Routers:
app.use('/login', userRouter);
app.use('/birds', birdRouter);
app.use('/birdgenda', birdgendaRouter);

// Default error
app.use((err,req,res,next) =>{
    const defaultError = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' }, 
    };
    const errorObj = Object.assign({},defaultError, err);
    console.log(errorObj.log);
    res.status(errorObj.status).send(errorObj.message);
  });


app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port 3000");
  });

module.exports = app;