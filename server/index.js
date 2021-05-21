const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session')
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 8000;
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(session({
    secret: 'diploma secret',
    saveUninitialized: true,
}));
app.use(morgan(':method :url :status - :response-time ms'))


// ROUTES
const authRoutes = require('./routes/auth');
const testRoutes = require('./routes/test');
app.use('/api/auth', authRoutes);
app.use('/api/test', testRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
})
