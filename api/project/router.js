const express = require('express');
//const Project = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        res.json('GET in project is Working');
    } catch (err) {
        next(err);
    }
});

router.post('/', (req, res, next) => {
    try {
        res.json('POST in project is Working');
    } catch (err) {
        next(err);
    }
});

module.exports = router;