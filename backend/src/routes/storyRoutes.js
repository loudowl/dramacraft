// Story management routes

const express = require('express');
const { createStory, getStory } = require('../controllers/storyController');

const router = express.Router();

router.post('/', createStory);
router.get('/:storyId', getStory);

module.exports = router;
