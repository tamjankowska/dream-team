const express = require('express');
const router = express.Router();
const Game = require('../models/schemas/games');

router.get('/games', (req, res) => {
    Game.find({}, (err, games) => {
        res.status(200).send(games)
    });
});

router.post("/games", (req, res) => {
    const title = req.body.title;
    const category = req.body.category;
    new Game({ title, category }).save((err, result) => {
        res.status(200).send({ status: "testing", result });
    });
});

module.exports = router;