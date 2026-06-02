// Credit model

const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Credit = sequelize.define('Credit', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  amount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Credit;
