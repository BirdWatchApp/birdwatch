const birdController = {};
const sqlActions = require("../db/sqlActions");

// birdController.verifyUser = async (req, res, next) => {
//   try {

//     const { userId } = res.locals;
//     const { groupId } = req.params;

//     const text = `

//     `;
//     const values = [userId, groupId];
//     const result = await pool.query(text, values);
//     if (!result.rows.length) {
//       throw new Error(
//         `birdController.verifyUserGroup Error: No combination for User: ${userId} and Group: ${groupId}`,
//       );
//     }


//     return next();
//   } catch (err) {
//     const errObj = {
//       log: 'birdController.verifyUserGroup Error',
//       message: { error: 'birdController.verifyUserGroup Error' },
//       status: 404,
//     };
//     return next({ ...errObj, log: err.message });
//   }
// };

birdController.getBirds = async (req, res, next) => {

  try {
    res.locals.birds = await sqlActions.getBirds(req.body);
    next();
  } catch (err) {
    const errObj = {
      log: 'birdController.getBirds Error',
      message: { error: 'birdController.getBirds Error' },
      status: 404,
    };
    return next({ ...errObj, log: err.message });
  }
};


birdController.getAllBirds = async (req, res, next) => {

  try {
    res.locals.allBirds = await sqlActions.getAllBirds();
    return next();
  } catch (err) {
    const errObj = {
      log: 'birdController.getAllBirds Error',
      message: { error: 'birdController.getAllBirds Error' },
      status: 404,
    };
    return next({ ...errObj, log: err.message });
  }
};

// birdController.addBirds = async (req, res, next) => {
//   //
//   try {
//     res.locals.newBird = sqlActions.addBirds(req);

//     return next();
//   } catch (err) {
//     const errObj = {
//       log: 'birdController.addBird Error',
//       message: { error: 'birdController.addBird Error' },
//       status: 404,
//     };
//     return next({ ...errObj, log: err.message });
//   }
// };

// birdController.updateBirds = async (req, res, next) => {
//   try {
//     res.locals.updatedBird = 
//     return next();
//   } catch (err) {
//     const errObj = {
//       log: 'birdController.updateBookReview Error',
//       message: { error: 'birdController.updateBookReview Error' },
//       status: 500,
//     };
//     return next({ ...errObj, log: err.message });
//   }
// };

// birdController.deleteBirds = async (req, res, next) => {
//   try {

//     res.locals.deletedBird = 
//     return next();
//   } catch (err) {
//     const errObj = {
//       log: 'birdController.deletedBird Error',
//       message: { error: 'birdController.deletedBird Error' },
//       status: 404,
//     };
//     return next({ ...errObj, log: err.message });
//   }
// };

module.exports = birdController;