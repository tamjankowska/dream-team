const express = require('express');
const router = express.Router();
const Review = require('../models/schemas/reviews');

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
    const { title, 
        gameTitle, 
        shortDescription, 
        review, 
        reviewerName, 
        dateReviewed, 
        reviewerScore }
        = req.body;
    new Review({ 
        title,
        gameTitle,
        shortDescription,
        review,
        reviewerName,
        dateReviewed,
        reviewerScore
    }).save((err, review) => {
        if (err) {
            console.log(err);
            res.status(500).json({ status: 'Not OK', err });
        } else {
            res.status(200).json({ status: 'OK', review})
        }
    });
});

router.post('/search', (req, res) => {
    const { title, 
        gameTitle, 
        shortDescription, 
        review, 
        reviewerName, 
        dateReviewed, 
        reviewerScore }
        = req.body;
    const query = {};
    if (title) {
        query.title = title;
    }
    if (gameTitle) {
        query.gameTitle = gameTitle;
    }
    if (shortDescription) {
        query.shortDescription = shortDescription;
    }
    if (review) {
        query.review = review
    }
    if (reviewerName) {
        query.reviewerName = reviewerName;
    }
    if (dateReviewed) {
        query.dateReviewed = dateReviewed;
    }
    if (reviewerScore) {
        query.reviewerScore = reviewerScore;
    }
    Review.find(query, (err, reviews) => {
        if (err) {
            console.log(err);
            res.status(204).json([]);
        } else {
            res.status(200).json({status: 'OK', reviews});
        }
    });
});

router.get('id/:id', (req, res) => {
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

router.get('/:field/:value', (req, res) => {
    Review.find({[req.params.field]: req.params.value}, (err, reviews) => {
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

module.exports = router;