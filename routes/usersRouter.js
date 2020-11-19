const express = require('express');
const router = express.Router();
const User = require('../models/schemas/users');

router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        res.status(200).send(users)
    });
});

router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const reviewer = req.body.reviewer;
    new User({ username, password, reviewer}).save((err, result) => {
        res.status(200).send({ status: 'testing', result })
    });
});

module.exports = router;

