const express = require('express');
const router = express.Router();
const USERS = require('../controllers/user');

router.post('/signIn', function (req, res) {
    if (req.body.login && req.body.password) {
        let result = USERS.signIn(req.body.login, req.body.password);
        if (result.status) {
            req.session.user = result.user;
            res.status(200).send({ status: true, user: result.user });
        } else {
            res.status(500).send({ status: false, message: result.message });
        }
    } else {
        res.status(500).send({ status: false, message: 'Login and password required' });
    }
});
router.post('/signUp', function (req, res) {
    if (req.body.login && req.body.password) {
        let result = USERS.signUp(req.body.login, req.body.password);
        if (result.status) {
            req.session.user = result.user;
            res.status(200).send({ status: true, user: result.user });
        } else {
            res.status(500).send({ status: false, message: result.message });
        }
    } else {
        res.status(500).send({ status: false, message: 'Login and password required' });
    }
});

module.exports = router;