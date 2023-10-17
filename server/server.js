const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());

// import routes
const userRouter = require('./routers/userRouter')

// Static files
app.use('/styles.css', express.static(path.resolve(__dirname, '..', 'dist', 'client/styles/styles.css')));

//Home Page:
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client/index.html'))
});

// Routers:
app.use('/login', userRouter);

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


app.listen(process.env.PORT, () => {
    console.log("Server started on port 3000");
  });

module.exports = app;