const userController = {};
const sqlActions = require("../db/sqlActions");

userController.login = (req, res, next) => {
  const { username, password } = req.body;
  try {
    res.locals.userID = sqlActions.checkPassword(username, password);
    next();
  } catch {
    next({
      log: "Error at userController.login",
      status: 400,
      message: {
        err: "userController.login: Wrong Username/Password",
      },
    });
  }
};
userController.signUp = (req, res, next) => {
  const { username, password } = req.body;
  try {
    res.locals.userID = sqlActions.addUser(username, password);
    next();
  } catch {
    next({
      log: "Error at userController.signUp",
      status: 400,
      message: {
        err: "userController.signUp: Error creating User in DB",
      },
    });
  }
};

module.exports = userController;
