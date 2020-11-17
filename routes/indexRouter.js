const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if(!req.session.views) {
        req.session.views = 1;
    } else {
        req.session.views += 1;
    }
    res.status(200).send({'testing': 'worked', 'views': req.session.views});
});

module.exports = router;