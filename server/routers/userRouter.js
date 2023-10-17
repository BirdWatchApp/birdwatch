const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

// Logging in
userRouter.get('/', userController.login, (req, res) => {
    return res.status(200).json();
})

// Create User
userRouter.post('/', userController.signUp, (req, res) => {
    return res.status(200).json();
})


module.exports = userRouter