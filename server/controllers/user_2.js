const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model { }

User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.STRING
}, { sequelize, modelName: 'user' });

module.exports = {
    createUser: async ({ name, email, password, type }) => {
        await sequelize.sync();
        let result = await User.findAndCountAll({ where: { email: email } })
        if (!result.count) {
            const newUser = await User.create({
                name,
                email,
                password,
                type
            })
            await newUser.save();
            return newUser.toJSON();
        }
        return null
    },
    loginUser: async ({email, password}) => {
        // await sequelize.sync()
        await sequelize.sync();
        let result = await User.findOne({ where: { email: email, password: password } })
        if (!result) {
            return null
        }
        return result.toJSON()
    },
}