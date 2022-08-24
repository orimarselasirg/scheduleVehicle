const { Sequelize, DataTypes, Op } = require('sequelize');
// const sequelize = new Sequelize(`postgres://postgres:R4m1r0.8489@localhost:5432/fyh`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });


const sequelize = new Sequelize({
  database: "ramitest",
  username: "postgres",
  password: "R4m1r0.8489",
  host: "rami.cwdlvpyp14jf.sa-east-1.rds.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    },
    logging: false,
    native: false,
  },
});

sequelize.authenticate()
.then(() => console.log('Postgres database connected'))
.catch(err => console.log('Something goes wrong ' + err))

module.exports = { sequelize, DataTypes, Op}