const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const Game = require('./models/schemas/games')

const Game = require('./models/schemas/games');
const User = require('./models/schemas/users');

require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.mongoConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors());
app.use(session({resave: true, saveUninitialized: true, secret: 'asdf'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    if(!req.session.views) {
        req.session.views = 1;
    } else {
        req.session.views += 1;
    }
    res.status(200).send({'testing': 'worked', 'views': req.session.views});
});

app.get('/games', (req, res) => {
    Game.find({}, (err, games) => {
        res.status(200).send(games)
    });
});

app.post("/games", (req, res) => {
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

app.get("/signup", (req, res) => {
    res.render("signup");
});
app.post("/signup", (req,res) => {
    res.status(200).send({"username": req.body.username});
});

app.get('/games', (req, res) => {
    Game.find({}, (err, games) => {
        res.status(200).send(games)
    });
});

app.post("/games", (req, res) => {
    const title = req.body.title;
    const category = req.body.category;
    new Game({ title, category }).save((err, result) => {
        res.status(200).send({ status: "testing", result });
    });
});

app.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        res.status(200).send(users)
    });
});

app.post('/users', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const reviewer = req.body.reviewer;
    new User({ username, password, reviewer}).save((err, result) => {
        res.status(200).send({ status: 'testing', result })
    });
});
app.listen(5000, () => {
    console.log('App is online.');
});