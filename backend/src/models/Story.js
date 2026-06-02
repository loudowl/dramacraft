// Story model

const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Story = sequelize.define('Story', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  videoUrl: {
    type: DataTypes.STRING,
  },
});

module.exports = Story;
