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

router.post('/add', (req, res) => {
    const title = req.body.title;
    const category = req.body.category;
    const ageRating = req.body.ageRating;
    const violence = req.body.violence;
    const sexAndNudity = req.body.sexAndNudity;
    const alcoholAndDrugs = req.body.alcoholAndDrugs;
    const gambling = req.body.gambling;
    const explicitLanguage = req.body.explicitLanguage;
    const averageScore = req.body.averageScore;
    const publisher = req.body.publisher;
    const releaseDate = req.body.releaseDate;
    new Game({ title, 
        category, 
        ageRating, 
        violence, 
        sexAndNudity, 
        alcoholAndDrugs, 
        gambling, 
        explicitLanguage,
        averageScore,
        publisher,
        releaseDate}).save((err, result) => {
        res.status(200).send({ status: result });
    });
});

router.post('/search', (req, res) => {
    const title = req.body.title;
    const category = req.body.category;
    const ageRating = req.body.ageRating;
    const violence = req.body.violence;
    const sexAndNudity = req.body.sexAndNudity;
    const alcoholAndDrugs = req.body.alcoholAndDrugs;
    const gambling = req.body.gambling;
    const explicitLanguage = req.body.explicitLanguage;
    const averageScore = req.body.averageScore;
    const publisher = req.body.publisher;
    const releaseDate = req.body.releaseDate;
    const query = {};
    if (title) {
        query.title = title;
    }
    if (category) {
        query.category = category;
    }
    if (ageRating) {
        query.ageRating = ageRating;
    }
    if (violence) {
        query.violence = violence;
    }
    if (sexAndNudity) {
        query.sexAndNudity = sexAndNudity;
    }
    if (alcoholAndDrugs) {
        query.alcoholAndDrugs = alcoholAndDrugs;
    }
    if (gambling) {
        query.gambling = gambling;
    }
    if (explicitLanguage) {
        query.explicitLanguage = explicitLanguage;
    }
    if (averageScore) {
        query.averageScore = averageScore;
    }
    if (publisher) {
        query.publisher = publisher;
    }
    if (releaseDate) {
        query.releaseDate = releaseDate;
    }

    Game.find(query, (err, results) => {
        if (err) {
            console.log(err);
            res.status(204).json([]);
        } else {
        res.status(200).json(results);
        }
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

router.delete('/delete', (req, res) => {
    Game.findByIdAndDelete({_id: req.params.id}, (err, game) => {
        if (err) {
            console.log(err);
            res.status(404).json({err: `The game '${req.params.id}' you are trying to delete does not exist!`});
        } else {
            res.status(204).json(game);
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