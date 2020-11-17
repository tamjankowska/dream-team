const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const Game = require('./models/schemas/games')

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
    new Game({ title, category }).save((err, result) => {
        res.status(200).send({ status: result });
    });
});

app.listen(5000, () => {
    console.log('App is online.');
});