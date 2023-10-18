const birdController = require('../controllers/birdController');
const express = require('express');
const router = express.Router();

router.get(
  '/',
  birdController.getAllBirds,
  // bookReviewController.verifyUser,
  (req, res) => {
    return res.status(200).json(res.locals.allBirds);
  },
);
router.post('/getBird', birdController.getBirds, (req, res) =>{
  return res.status(200).json(res.locals.birds)
})

// router.post('/:id', birdController.addBird, (req, res) => {
//   return res.status(201).json(res.locals.newBird);
// });

// router.put('/:id', birdController.updateBird, (req, res) => {
//   return res.status(201).json(res.locals.updatedBird);
// });

// router.delete('/:id', birdController.deleteBird, (req, res) => {
//   return res.status(200).json(res.locals.deletedBird);
// });

module.exports = router;