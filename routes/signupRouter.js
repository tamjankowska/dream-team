const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("signup");
});
router.post("/", (req,res) => {
    res.status(200).send({"username": req.body.username});
});

module.exports = router;