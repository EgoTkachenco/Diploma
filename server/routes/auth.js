const express = require('express');
const router = express.Router();
const USERS = require('../controllers/user');
const { createUser, loginUser} = require('../controllers/user_2');

router.post('/signUp', async (req, res) => {
    const form = req.body
    if (form && form.name && form.email && form.password && form.type) {
        let result = await createUser({ name: form.name, email: form.email, password: form.password, type: form.type });
        if (result) {
            req.session.user = result;
            res.status(200).send({ status: true, user: result });
        } else {
            res.status(500).send({ status: false, message: "User already exist" });
        }
    } else {
        res.status(500).send({ status: false, message: 'Login, password, name and type is required' });
    }
});

router.post('/signIn', async (req, res) => {
    const form = req.body
    if (form.email && form.password) {
        let result = await loginUser({ email: form.email, password: form.password });
        if (result) {
            req.session.user = result;
            res.status(200).send({ status: true, user: result });
        } else {
            res.status(500).send({ status: false, message: "Invalid credentials" });
        }
    } else {
        res.status(500).send({ status: false, message: 'Login, password, name and type is required' });
    }
});

module.exports = router;