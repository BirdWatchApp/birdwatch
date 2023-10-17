const birdgendaController = {};
const sqlActions = require("../db/sqlActions");


birdgendaController.getBirdgenda = async (req, res, next) => {
    try {
        res.locals.birdgendas = await sqlActions.getBirdgenda(req.body)
        next();
    }catch (err) {
        const errObj = {
          log: 'birdgendaController.getBirdgenda Error',
          message: { error: 'birdgendaController.getBirdgenda Error' },
          status: 404,
        };
        return next({ ...errObj, log: err.message });
      }
}

birdgendaController.addBirdgenda = async (req, res, next) => {
    try {
        res.locals.birdgendas = await sqlActions.addBirdgenda(req.body)
        next();
    } catch (err) {
      const errObj = {
        log: 'birdgendaController.addBirdgenda Error',
        message: { error: 'birdgendaController.addBirdgenda Error' },
        status: 404,
      };
      return next({ ...errObj, log: err.message });
    }
}

birdgendaController.editBirdgenda = async (req, res, next) => {
    try {
        res.locals.birdgendas = await sqlActions.editBirdgenda(req.body)
        next();
    } catch (err) {
      const errObj = {
        log: 'birdgendaController.editBirdgenda Error',
        message: { error: 'birdgendaController.editBirdgenda Error' },
        status: 404,
      };
      return next({ ...errObj, log: err.message });
    }
}

birdgendaController.deleteBirdgenda = async (req, res, next) => {
    try {
        res.locals.birdgendas = await sqlActions.deleteBirdgenda(req.body)
        next();
    } catch (err) {
      const errObj = {
        log: 'birdgendaController.deleteBirdgenda Error',
        message: { error: 'birdgendaController.deleteBirdgenda Error' },
        status: 404,
      };
      return next({ ...errObj, log: err.message });
    }
}

module.exports = birdgendaController;
