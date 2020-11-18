const express = require('express');
const router = express.Router();

router.get("/signup", (req, res) => {
    res.render("signup");
});
router.post("/signup", (req,res) => {
    res.status(200).send({"username": req.body.username});
});

module.exports = router;