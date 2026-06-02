// Database configuration

const sequelize = require('../src/utils/database');

sequelize.sync()
  .then(() => {
    console.log('Database connected and synced');
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });
