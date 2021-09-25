const express = require('express');
const router = express.Router();
const controller = require('../controller/comments');

router.get('/comments', controller.getAll);

router.get('/comments/:id', controller.getByID);

router.post('/comments', controller.addComment);


module.exports = router;