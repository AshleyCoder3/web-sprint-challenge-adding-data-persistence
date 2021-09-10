const express = require('express');
const Resource = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const all = await Resource.getResource();
    res.json(all);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newResource = await Resource.createResource(req.body);
    res.status(201).json(newResource);
  } catch (err) {
    next(err);
  }
});

module.exports = router;