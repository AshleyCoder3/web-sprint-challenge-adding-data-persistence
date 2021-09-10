const express = require('express');

const ProjectRouter = require('./project/router');
const ResourceRouter = require('./resource/router');
const TaskRouter = require('./task/router');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/Tasks', TaskRouter);

server.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Sprint 4.2!',
        message2: 'TRY endpoint /api/projects',
        message3: 'TRY endpoint /api/resources',
        message4: 'TRY endpoint /api/tasks'
    });
});


//***********************500 error middleware***********//
//eslint-disable-next-line
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        devMessage: 'Something bad inside the server!'
    });
});

module.exports = server;