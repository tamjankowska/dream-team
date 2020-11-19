const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home");
});

router.post("/", (req,res) => {
    res.status(200).send({'homepage' : 'worked'});
});

module.exports = router;