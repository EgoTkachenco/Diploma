const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { testsDb } = require('../config/firebase');

class Test extends Model { }

Test.init({
    author_id: DataTypes.STRING,
    config_url: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING
}, { sequelize, modelName: 'test' });

module.exports = {
    createTest: async ({ author_id, title, description, errors }) => {
        await sequelize.sync();
        // Save test to firebase
        let savedConfig = await testsDb.push(errors)
        let config_url = savedConfig.key
        // Save test key to database
        const newTest = await Test.create({
            author_id,
            title,
            description,
            config_url
        })
        await newTest.save();

        return await newTest.toJSON();
    },
    getTests: async () => {
        // await sequelize.sync()
        const tests = await Test.findAll()
        return tests
    },
    updateTest: async ({ id, title, description }) => {
        // await sequelize.sync()
        let updatedTest = await Test.update({ title: title, description: description }, { where: { id: id } })
        updatedTest = await (await Test.findByPk(id)).toJSON()
        return updatedTest;
    },
    removeTest: async ({ id }) => {
        let removedTest = await Test.destroy({ where: { id: id } })
        return removedTest
    }
}
