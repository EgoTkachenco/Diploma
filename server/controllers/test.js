const { Sequelize, Model, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

class Test extends Model { }
Test.init({
    author_id: DataTypes.STRING,
    config_url: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING
}, { sequelize, modelName: 'test' });

module.exports = {
    createTest: async ({ author_id, title, description, errorsConfig }) => {
        await sequelize.sync();
        let config_url = 'http://url.com'
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
        await sequelize.sync()
        const tests = await Test.findAll()
        return tests
    },
    updateTest: async ({ id, title, description }) => {
        await sequelize.sync()
        await Test.update({ title: title, description: description }, { where: { id: id }})
    
    }
}