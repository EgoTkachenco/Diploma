const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session')
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors')
app.use(cors())

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.db'
});


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(session({
    secret: 'diploma secret',
    saveUninitialized: true,
}));
app.use(morgan(':method :url :status - :response-time ms'))

const authRoutes = require('./routes/auth');
const testRoutes = require('./routes/test');

app.use('/api/auth', authRoutes);
app.use('/api/test', testRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
})

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection()