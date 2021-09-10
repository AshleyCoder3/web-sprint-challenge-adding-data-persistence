const express = require('express');
const Project = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const allProj = await Project.getProject();
    res.json(allProj);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newProject = await Project.createProject(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});

module.exports = router;