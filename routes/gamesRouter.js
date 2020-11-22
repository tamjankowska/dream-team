const express = require("express");
const router = express.Router();
const Game = require("../models/schemas/games");

router.get("/", (req, res) => {
  Game.find({}, (err, games) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(games);
    }
  });
});

router.post("/add", (req, res) => {
  const {
    title,
    category,
    ageRating,
    violence,
    sexAndNudity,
    alcoholAndDrugs,
    gambling,
    explicitLanguage,
    averageScore,
    publisher,
    releaseDate,
  } = req.body;
  new Game({
    title,
    category,
    ageRating,
    violence,
    sexAndNudity,
    alcoholAndDrugs,
    gambling,
    explicitLanguage,
    averageScore,
    publisher,
    releaseDate,
  }).save((err, result) => {
    res.status(200).send({ status: result });
  });
});

router.post("/search", (req, res) => {
  const {
    title,
    category,
    ageRating,
    violence,
    sexAndNudity,
    alcoholAndDrugs,
    gambling,
    explicitLanguage,
    averageScore,
    publisher,
    releaseDate,
  } = req.body;
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

router.get("/id/:id", (req, res) => {
  Game.findOne({ _id: req.params.id }, (err, game) => {
    if (err) {
      console.log(err);
      res
        .status(404)
        .json({ err: `The game ${req.params.id} does not exist!` });
    } else {
      res.status(200).json(game);
    }
  });
});

router.delete("/id/:id", (req, res) => {
  Game.findOneAndDelete({ _id: req.params.id }, (err, game) => {
    if (err) {
      console.log(err);
      res
        .status(404)
        .json({
          err: `The game '${req.params.id}' you are trying to delete does not exist!`,
        });
    } else {
      res.status(200).json({ game, msg: `${req.params.id} has been deleted` });
    }
  });
});

router.get("/:field/:value", (req, res) => {
  Game.find({ [req.params.field]: req.params.value }, (err, game) => {
    if (err) {
      console.log(err);
      res.status(404).json({ err });
    } else {
      res.status(200).json(game);
    }
  });
});

router.get("/reviews", (req, res) => {
  Game.find({ reviewSchema: [] }, (err, games) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(games);
    }
  });
});

router.post("/reviews/add", (req, res) => {
  const title = req.body.reviews.title;
  const gameTitle = req.body.reviews.gameTitle;
  const shortDescription = req.body.reviews.shortDescription;
  const review = req.body.reviews.review;
  const reviewerName = req.body.reviews.reviewerName;
  const dateReviewed = req.body.reviews.dateReviewed;
  const reviewerScore = req.body.reviews.reviewerScore;
  console.log(title);
  new Game({
    title,
    gameTitle,
    shortDescription,
    review,
    reviewerName,
    dateReviewed,
    reviewerScore,
  }).save((err, result) => {
    res.status(200).send({ status: result });
  });
});

module.exports = router;
