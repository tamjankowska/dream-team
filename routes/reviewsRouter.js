const express = require('express');
const router = express.Router();
const Review = require('../models/schemas/reviews');
const User = require('../models/schemas/users');
const Game = require('../models/schemas/games');

router.get('/', (req, res) => {
    Review.find({}, (err, reviews) => {
        if (err) {
            console.log(err);
            res.status(500).json(err);
        } else {
            res.status(200).json(reviews);
        }
    });
});

router.post('/post', (req, res) => {
    new Review(req.body).save((err, review) => {
        if (err) {
            console.log(err);
            res.status(500).json({ status: 'Not OK', err });
        } else {
            res.status(200).json({ status: 'OK', review})
        }
    });
    });

router.post('/search', (req, res) => {
    const query = {};
    if (req.body.title) {
        query.title = req.body.title;
    }
    if (req.body.gameTitle) {
        query.gameTitle = req.body.gameTitle;
    }
    if (req.body.shortDescription) {
        query.shortDescription = req.body.shortDescription;
    }
    if (req.body.review) {
        query.review = req.body.review
    }
    if (req.body.reviewerName) {
        query.reviewerName = req.body.reviewerName;
    }
    if (req.body.dateReviewed) {
        query.dateReviewed = req.body.dateReviewed;
    }
    if (req.body.reviewerScore) {
        query.reviewerScore = req.body.reviewerScore;
    }
    Review.find(query, (err, reviews) => {
        if (err) {
            console.log(err);
            res.status(500).json({status: 'Not OK', err});
        } else if (!reviews) {
            res.status(404).json({status: 'Not OK', msg: 'Not found'});
        } else {
            res.status(200).json({status: 'OK', reviews});
        }
    });
});

router.get('/id/:id', (req, res) => {
    Review.findOne({ _id: req.params.id }, (err, review) => {
        if (err) {
            console.log(err);
            res.status(500).json({status: 'Not OK', err});
        } else if (!review) {
            res.status(404).json({ status: 'Not OK', err: `Review: ${req.params.id} does not exist!`})
        } else {
            res.status(200).json({status: 'OK', review});
        }
    });
});

router.delete('/id/:id', (req, res) => {
    Review.findOneAndDelete({_id: req.params.id}, (err, review) => {
        if (err) {
            console.log(err);
            res.status(500).json({status: 'Not OK', err});
        } else if (!review) {
            res.status(404).json({status: 'Not OK', err: `Review: ${req.params.id} does not exist!` });
        } else {
            res.status(200).json({status: 'OK', msg: `Review: ${req.params.id} has been deleted`});
        }
    });
});

router.get('/reviewer/:id', (req, res) => {
    User.findOne({_id: req.params.id}).populate('reviews').exec((err, reviews) => {
        if (err) {
            console.log(err);
            res.status(500).json({status: 'Not OK', err});
        } else if (!reviews) {
            res.status(404).json({status: 'Not OK', err: 'No reviews found'});
        } else {
            res.status(200).json({status: 'OK', reviews});
        }
    });
});

router.get('/game/:id', (req, res) => {
    Review.find({gameID: req.params.id}, async (err, reviews) => {
        if (err) {
            console.log(err);
            res.status(500).json({status: 'Not OK', err});
        } else if (!reviews) {
            res.status(404).json({status: 'Not OK', err: 'No reviews found'});
        } else {
            const rs = await Promise.all(reviews.map(async (review) => {
                const user = await User.findOne({ _id: review.reviewer }).exec();
                const ratings = await Game.findOne({_id: review.gameID}).exec();
                return {review, 
                    username: user.username, 
                    ageRating: ratings.ageRating,
                    violence: ratings.violence,
                    sexAndNudity: ratings.sexAndNudity,
                    alcoholAndDrugs: ratings.alcoholAndDrugs,
                    gambling: ratings.gambling,
                    explicitLanguage: ratings.explicitLanguage,
                    category: ratings.category
                }
            }));
            res.status(200).json({status: 'OK', 
                                username: rs.user, 
                                reviews: rs,
                                ratings: rs.ratings
                            });
        }
    });
});

module.exports = router;