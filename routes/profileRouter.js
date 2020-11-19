const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("profile");
});

router.post("/", (req,res) => {
    res.status(200).send({'profile' : 'worked'});
});

module.exports = router;