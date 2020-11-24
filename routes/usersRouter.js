const express = require("express");
const router = express.Router();
const User = require("../models/schemas/users");
const bcrypt = require('bcrypt');

router.get("/", (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: 'Not OK', err });
    } else {
      res.status(200).json({ status: 'OK', users });
    }
  });
});

router.post("/signup", async (req, res) => {
  if (req.body.password !== req.body.passwordCheck) {
    return res.status(400).json({ status: 'Not OK', err: 'Passwords Don\'t match' })
  }
  req.body.password = await bcrypt.hash(req.body.password, 10)
  new User(req.body).save((err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: 'Not OK', err });
    } else {
      res.status(200).send({ status: 'OK', result });
    }
  });
});

router.post("/search", (req, res) => {
  const query = {};
  if (req.body.username) {
    query.username = req.body.username;
  }
  if (req.body.emailAddress) {
    query.emailAddress = req.body.emailAddress;
  }
  if (req.body.password) {
    query.password = req.body.password;
  }
  if (req.body.reviewer) {
    query.reviewer = req.body.reviewer;
  }
  User.find(query, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: 'Not OK', err });
    } else if (!results) {
      res.status(404).json({ status: 'Not OK', msg: 'No users found!' });
    } else {
      res.status(200).json({ status: 'OK', results });
    }
  });
});

router.get("/id/:id", (req, res) => {
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: 'Not OK', err });
    } else if (!user) {
      res.status(404).json({ status: 'Not OK', err: `The user ${req.params.id} does not exist!` });
    } else {
      res.status(200).json({ status: 'OK', user });
    }
  });
});

router.delete("/id/:id", (req, res) => {
  User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: 'Not OK', err });
    } else if (!user) {
      console.log(err);
      res.status(404).json({ status: 'Not OK', err: `The user ${req.params.id} you are trying to delete does not exist!` });
    } else {
      res.status(200).json({ status: 'OK', user, msg: `${req.params.id} has been deleted` });
    }
  });
});

router.get("/:field/:value", (req, res) => {
  User.find({ [req.params.field]: req.params.value }, (err, user) => {
    if ([req.params.field] == "password") {
      res.status(403).json({ status: 'Not OK', msg: `It is not possible to find a user via their password, please use alternative search criteria.` });
    } else if (err) {
      console.log(err);
      res.status(500).json({ status: 'Not OK', err });
    } else if (!user) {
      res.status(404).json({ status: 'Not OK', msg: 'Not found' });
    } else {
      res.status(200).json(user);
    }
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (await User.checkPassword(email, password)) {
    User.findOne({ emailAddress: email }, (err, user) => {
      if (err) {
        console.log(err);
        res.status(500).json({ status: "Not OK", err });
      } else if (!user) {
        res.status(404).json({ status: "Not OK", err: `User doesn't exist.` });
      } else {
        res.status(200).json({ status: `OK`, emailAddress: user.emailAddress, reviewer: user.reviewer, username: user.username });
      }
    });
    return;
  }
  res.status(401).json({ status: "Not OK", err: `Unauthorised.` });
});

router.get('/:id', function (req, res) {
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: "Not OK", err });
    } else {
      res.status(200).json({status: 'OK', user});
    }
  });
})


module.exports = router;
