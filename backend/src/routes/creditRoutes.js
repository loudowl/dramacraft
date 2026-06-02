// Credit management routes

const express = require('express');
const { getCredits } = require('../controllers/creditController');

const router = express.Router();

router.get('/', getCredits);

module.exports = router;
