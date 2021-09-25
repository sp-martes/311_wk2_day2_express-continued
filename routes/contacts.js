const express = require('express');
const router = express.Router();
const controller = require('../controller/contacts');

router.get('/contacts', controller.getAll);

router.get('/contacts/:id', controller.getByID);

router.post('/contacts', controller.addContact);


module.exports = router;