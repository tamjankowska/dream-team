const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require("express-session");
const app = express();
const mongoose = require('mongoose');

const indexRouter = require('./routes/indexRouter');
const gamesRouter = require('./routes/gamesRouter');
const usersRouter = require('./routes/usersRouter');
const signupRouter = require('./routes/signupRouter');

require("dotenv").config();

mongoose.connect(process.env.mongoConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection;

connection.once('open', function () {
    console.log('MongoDB database connection established successfully!');
})

app.use(cors());
app.use(session({resave: true, saveUninitialized: true, secret: 'asdf'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/games', gamesRouter);
app.use('/users', usersRouter);
app.use('/signup', signupRouter);

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
});


app.listen(5000, () => {
    console.log('App is online.');
});
