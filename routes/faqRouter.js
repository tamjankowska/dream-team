const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("FAQ");
});

router.post("/", (req,res) => {
    res.status(200).send({'faq' : 'worked'});
});

module.exports = router;