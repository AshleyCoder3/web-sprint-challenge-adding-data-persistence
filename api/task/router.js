const express = require('express');
//const Task = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        res.json('GET in task is Working');
    } catch (err) {
        next(err);
    }
});

router.post('/', (req, res, next) => {
    try {
        res.json('POST in task is Working');
    } catch (err) {
        next(err);
    }
});

module.exports = router;
