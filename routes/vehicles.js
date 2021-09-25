const express = require('express');
const router = express.Router();
const controller = require('../controller/vehicles')

router.get('/vehicles', controller.getAll);

router.get('/vehicles/:id', controller.getByID);

router.post('/vehicles', controller.addVehicle);


module.exports = router;