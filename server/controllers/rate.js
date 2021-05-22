const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Rate extends Model { }

Rate.init({
    user_id: DataTypes.STRING,
    test_id: DataTypes.STRING,
    time: DataTypes.STRING,
    rate: DataTypes.STRING
}, { sequelize, modelName: 'test' });

module.exports = {
    getTests: async () => {
      
    },
}
