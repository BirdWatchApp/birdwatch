const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

// Logging in
userRouter.get('/', userController.login, (req, res) => {
    return res.status(200).json(res.locals.userID);
})

// Create User
userRouter.post('/', userController.signUp, (req, res) => {
    return res.status(200).json(res.locals.userID);
})


module.exports = userRouter