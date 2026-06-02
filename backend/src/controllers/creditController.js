// Credit controller

const Credit = require('../models/Credit');

const getCredits = async (req, res) => {
  try {
    const { userId } = req.query;
    const credits = await Credit.findOne({ where: { userId } });

    if (credits) {
      res.json({ credits: credits.amount });
    } else {
      res.status(404).json({ error: 'Credits not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve credits' });
  }
};

module.exports = {
  getCredits
};
