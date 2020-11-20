const express = require('express');
const router = express.Router();
const User = require('../models/schemas/users');

router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(users);
        }
    });
});

router.post('/signup', (req, res) => {
    const username = req.body.username;
    const emailAddress = req.body.emailAddress;
    const password = req.body.password;
    const reviewer = req.body.reviewer;
    new User({ username, 
            emailAddress, 
            password, 
            reviewer}).save((err, result) => {
            res.status(200).send({ status: result })
    });
});

router.post('/search', (req, res) => {
    const username = req.body.username;
    const emailAddress = req.body.emailAddress;
    const password = req.body.password;
    const reviewer = req.body.reviewer;
    const query = {};
    if (username) {
        query.username = username;
    }
    if (emailAddress) {
        query.emailAddress = emailAddress;
    }
    if (password) {
        query.password = password;
    }
    if (reviewer) {
        query.reviewer = reviewer;
    }
    User.find(query, (err, results) => {
        if (err) {
            console.log(err);
            res.status(204).json([]);
        } else {
            res.status(200).json(results);
        }
    });
});

router.get('/id/:id', (req, res) => {
    User.findOne({_id: req.params.id}, (err, user) => {
        if (err) {
            console.log(err);
            res.status(500).json(err);
        } else if (!user) {
            res.status(404).json({err: `The user ${req.params.id} does not exist!`});
        } else {
            res.status(200).json(user);
        }
    });
});

router.delete('/id/:id', (req, res) => {
    User.findOneAndDelete({_id: req.params.id}, (err, user) => {
        if (err) {
            console.log(err);
            res.status(404).json({err: `The user ${req.params.id} you are trying to delete does not exist!`})
        } else {
            res.status(200).json({user, msg: `${req.params.id} has been deleted`})
        }
    });
});

router.get('/:field/:value', (req, res) => {
    User.find({[req.params.field]: req.params.value}, (err, user) => {
        if ([req.params.field] == 'password') {
            res.status(403).json({msg: `It is not possible to find a user via their password, please use alternative search criteria.`});
        } else if (err) {
            console.log(err);
            res.status(404).json({err});
        } else {
            res.status(200).json(user);
        }
    });
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    if (await User.checkPassword(email, password)) {
        User.findOne({emailAddress: email}, (err, user) => {
            if (err) {
                console.log(err);
                res.status(500).json({status: 'Not OK', err});
            } else if (!user) {
                res.status(404).json({status: 'Not OK', err: `User doesn't exist.`});
            } else {
                console.log(user);
                res.status(200).json({status: `OK`, emailAddress: user.emailAddress, reviewer: user.reviewer});
            }
        });
        return;
    }
    res.status(401).json({status: 'Not OK', err: `Unauthorised.`})
})
module.exports = router;

