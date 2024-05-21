const sequelize = require('../config/database');
const Item = require('./item');

const initDB = async () => {
    await sequelize.sync({ force: true }); 
    console.log("Database synchronized");
};

module.exports = { initDB, Item };
