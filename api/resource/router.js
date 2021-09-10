const express = require('express');
//const Resource = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
  try {
    res.json('GET in resource is Working');
  } catch (err) {
    next(err);
  }
});

router.post('/', (req, res, next) => {
  try {
    res.json('POST in resource is Working');
  } catch (err) {
    next(err);
  }
});

module.exports = router;