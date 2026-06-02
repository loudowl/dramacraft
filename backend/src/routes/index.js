// Main routing file

const express = require('express');
const userRoutes = require('./userRoutes');
const storyRoutes = require('./storyRoutes');
const creditRoutes = require('./creditRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/stories', storyRoutes);
router.use('/credits', creditRoutes);

module.exports = router;
