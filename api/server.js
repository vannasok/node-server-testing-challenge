const express = require('express');
const server = express();

const petRouter = require('../pets/pets-router');

server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json({ api: 'running' });
});

server.use('/api/pets', petRouter);

module.exports = server;
