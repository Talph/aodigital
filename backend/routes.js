const express = require('express');

const emailController = require('./src/controllers/EmailController');

const routes = express.Router();

// routes.get('/');
// routes.get('/email', emailController.index);
routes.post('/email', emailController.store);
// routes.get('/email/:id', emailController.findById);
// routes.delete('/email/:id', emailController.delete);
// routes.put('/email/:id', emailController.update);
module.exports = routes;