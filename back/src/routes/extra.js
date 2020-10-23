const express = require('express');
const router = express.Router();
const extraController = require('../controllers/extraController');

router.post('/', extraController.createExtra);

module.exports = router;
