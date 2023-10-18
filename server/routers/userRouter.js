const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

// Logging in
userRouter.post('/', userController.login, (req, res) => {
    return res.status(200).json(res.locals.userID);
})

// Create User
userRouter.post('/login', userController.signUp, (req, res) => {
    return res.status(200).json(res.locals.userID);
})


module.exports = userRouter