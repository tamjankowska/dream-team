const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');

const indexRouter = require('./routes/indexRouter');
const gamesRouter = require('./routes/gamesRouter');
const usersRouter = require('./routes/usersRouter');
const signupRouter = require('./routes/signupRouter');

require('dotenv').config();

mongoose.connect(process.env.mongoConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors());
app.use(session({resave: true, saveUninitialized: true, secret: 'asdf'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/games', gamesRouter);
app.use('/users', usersRouter);
app.use('/signup', signupRouter);

app.listen(5000, () => {
    console.log('App is online.');
});