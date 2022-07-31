const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize = new Sequelize(`postgres://postgres:R4m1r0.8489@localhost:5432/fyh`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

sequelize.authenticate()
.then(() => console.log('Postgres database connected'))
.catch(err => console.log('Something goes wrong ' + err))

module.exports = { sequelize, DataTypes, Op}