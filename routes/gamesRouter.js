const express = require('express');
const router = express.Router();
const Game = require('../models/schemas/games');

router.get('/', (req, res) => {
    Game.find({}, (err, games) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(games);
        }
    })
});

router.post('/', (req, res) => {
    const title = req.body.title;
    const category = req.body.category;
    new Game({ title, category }).save((err, result) => {
        res.status(200).send({ status: "testing", result });
    });
});

router.get('/id/:id', (req, res) => {
    Game.findOne({_id: req.params.id}, (err, game) => {
        if (err) {
            console.log(err);
            res.status(404).json({err: `The game ${req.params.id} does not exist!`});  
        } else {
            res.status(200).json(game);
        }
    });
});

router.get('/:field/:value', (req, res) => {
    Game.find({[req.params.field]: req.params.value}, (err, game) => {
        if (err) {
            console.log(err);
            res.status(404).json({err});
        } else {
            res.status(200).json(game);
        }
    });
});

module.exports = router;