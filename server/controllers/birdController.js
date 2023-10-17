const birdController = {};
const sqlActions = require("../db/sqlActions");

birdController.verifyUser = async (req, res, next) => {
  try {
    console.log('triggered verify user BRC line 15');
    // Deconstruct group and user
    const { userId } = res.locals;
    const { groupId } = req.params;

    // Check if userId and groupId exist together if so -> proceed
    // else -> throw error
    const text = `

    `;
    const values = [userId, groupId];
    const result = await pool.query(text, values);
    if (!result.rows.length) {
      throw new Error(
        `bookReviewController.verifyUserGroup Error: No combination for User: ${userId} and Group: ${groupId}`,
      );
    }

    // If we have a row we can move on to the next verification
    return next();
  } catch (err) {
    const errObj = {
      log: 'bookReviewController.verifyUserGroup Error',
      message: { error: 'bookReviewController.verifyUserGroup Error' },
      status: 404,
    };
    return next({ ...errObj, log: err.message });
  }
};


birdController.getAllBirds = async (req, res, next) => {

  try {
    res.locals.bookReviews = result.rows;

    return next();
  } catch (err) {
    const errObj = {
      log: 'BookReviewController.getBookReviews Error',
      message: { error: 'bookReviewController.getBookReviews Error' },
      status: 404,
    };
    return next({ ...errObj, log: err.message });
  }
};

birdController.addBirds = async (req, res, next) => {
  //
  try {
    res.locals.newBird = result.rows[0];

    return next();
  } catch (err) {
    const errObj = {
      log: 'bookReviewController.addBookReview Error',
      message: { error: 'bookReviewController.addBookReview Error' },
      status: 404,
    };
    return next({ ...errObj, log: err.message });
  }
};

birdController.updateBirds = async (req, res, next) => {
  try {
    res.locals.updatedBird = result.rows[0];
    return next();
  } catch (err) {
    const errObj = {
      log: 'bookReviewController.updateBookReview Error',
      message: { error: 'bookReviewController.updateBookReview Error' },
      status: 500,
    };
    return next({ ...errObj, log: err.message });
  }
};

birdController.deleteBirds = async (req, res, next) => {
  try {

    res.locals.deletedBird = result.rows[0];
    return next();
  } catch (err) {
    const errObj = {
      log: 'bookReviewController.deleteBookReview Error',
      message: { error: 'bookReviewController.deleteBookReview Error' },
      status: 404,
    };
    return next({ ...errObj, log: err.message });
  }
};

module.exports = birdController;