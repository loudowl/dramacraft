// Story controller

const Story = require('../models/Story');
const { processAudioFile } = require('../services/storyService');

const createStory = async (req, res) => {
  try {
    const { audioFile, userId } = req.body;
    const story = await Story.create({ userId, status: 'processing' });
    processAudioFile(audioFile, story.id); // Asynchronous processing
    res.status(200).json({ storyId: story.id, status: 'processing' });
  } catch (error) {
    res.status(500).json({ error: 'Story creation failed' });
  }
};

const getStory = async (req, res) => {
  try {
    const { storyId } = req.params;
    const story = await Story.findByPk(storyId);

    if (story) {
      res.json({ storyId: story.id, status: story.status, videoUrl: story.videoUrl });
    } else {
      res.status(404).json({ error: 'Story not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve story' });
  }
};

module.exports = {
  createStory,
  getStory
};
