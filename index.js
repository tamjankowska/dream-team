const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const session = require("express-session")

app.use(cors());
app.session(session({resave:true, saveUninitialized: true, secret:"asdf"}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send({'testing': 'worked'});
});

app.listen(5000, () => {
    console.log('App is online.');
});