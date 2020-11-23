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
  new Game(req.body).save((err, result) => {
    res.status(200).send({ status: result });
  });
});

router.post("/search", (req, res) => {
  const query = {};
  if (req.body.title) {
    query.title = req.body.title;
  }
  if (req.body.category) {
    query.category = req.body.category;
  }
  if (req.body.ageRating) {
    query.ageRating = req.body.ageRating;
  }
  if (req.body.violence) {
    query.violence = req.body.violence;
  }
  if (req.body.sexAndNudity) {
    query.sexAndNudity = req.body.sexAndNudity;
  }
  if (req.body.alcoholAndDrugs) {
    query.alcoholAndDrugs = req.body.alcoholAndDrugs;
  }
  if (req.body.gambling) {
    query.gambling = req.body.gambling;
  }
  if (req.body.explicitLanguage) {
    query.explicitLanguage = req.body.explicitLanguage;
  }
  if (req.body.averageScore) {
    query.averageScore = req.body.averageScore;
  }
  if (req.body.publisher) {
    query.publisher = req.body.publisher;
  }
  if (req.body.releaseDate) {
    query.releaseDate = req.body.releaseDate;
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
      res.status(500).json({ status: 'Not OK', err })
    } else if (!game) {
      console.log(err);
      res.status(404).json({ status: 'Not OK', err: `The game '${req.params.id}' you are trying to delete does not exist!` });
    } else {
      res.status(200).json({ status: 'OK', game, msg: `${req.params.id} has been deleted` });
    }
  });
});

router.get("/:field/:value", (req, res) => {
  Game.find({ [req.params.field]: req.params.value }, (err, game) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: 'Not OK', err });
    } else if (!game) {
      console.log(err);
      res.status(404).json({ status: 'Not OK', msg: 'Not found' });
    } else {
      res.status(200).json({ status: 'OK', game });
    }
  });
});

router.get("/categories", (req, res) => {
  const query = Game.find({}).select({ "category": 1, "_id": 0 });
  query.exec((err, value) => {
    if (err) {
      res.status(404).json({ status: "Not OK", err });
    } else {
      const categories = new Set()
      for (let category of value){
        categories.add(category.category)
      }
      res.status(200).json(  [...categories]  )
    }
  });
})

module.exports = router;
