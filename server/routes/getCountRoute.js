// import dependencies and initialize the express router
const express = require('express');
const GetCountController = require('../controllers/getCountController');

const router = express.Router();

// define routes
router.get('', GetCountController.getCount);

module.exports = router;
