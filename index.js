const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require("express-session");
const app = express();
const mongoose = require('mongoose');

const indexRouter = require('./routes/indexRouter');
const gamesRouter = require('./routes/gamesRouter');
const usersRouter = require('./routes/usersRouter');
const homepageRouter = require('./routes/homepageRouter');
const profileRouter = require('./routes/profileRouter');
const faqRouter = require('./routes/faqRouter');
const reviewsRouter = require('./routes/reviewsRouter');

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
app.use('/home',homepageRouter);
app.use('/profile', profileRouter);
app.use('/faq', faqRouter);
app.use('/reviews', reviewsRouter);

app.listen(5000, () => {
    console.log('App is online.');
});
