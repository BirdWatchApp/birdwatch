const bookReviewController = require('../controllers/birds');
const express = require('express');
const router = express.Router();

router.get(
  '/:user_id',
  birdController.getAllBirds,
  // bookReviewController.verifyUser,
  (req, res) => {
    return res.status(200).json(res.locals.getAllBirds);
  },
);

router.post('/:id', birdController.addBird, (req, res) => {
  return res.status(201).json(res.locals.newBird);
});

router.put('/:id', birdController.updateBird, (req, res) => {
  return res.status(201).json(res.locals.updatedBird);
});

router.delete('/:id', birdController.deleteBird, (req, res) => {
  return res.status(200).json(res.locals.deletedBird);
});

module.exports = router;