const birdgendaController = require('../controllers/birdgendaController');
const express = require('express');
const router = express.Router();

router.get('/', birdgendaController.getBirdgenda, (req, res) => {
    return res.status(200).json(res.locals.birdgendas);
});
router.post('/', birdgendaController.addBirdgenda, (req, res) => {
    return res.status(200).json(res.locals.birdgendas);
});
router.patch('/', birdgendaController.editBirdgenda, (req, res) => {
    return res.status(200).json(res.locals.birdgendas);
});
router.delete('/', birdgendaController.deleteBirdgenda, (req, res) => {
    return res.status(200).json(res.locals.birdgendas);
});


module.exports = router;