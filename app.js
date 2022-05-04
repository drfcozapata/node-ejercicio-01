const express = require('express');
const { globalErrorHandler } = require('./controllers/errors.controller');

// Routers
const { usersRouter } = require('./routes/user.routes');
const { repairsRouter } = require('./routes/repair.routes');

// Init express app
const app = express();

// Enable incoming JSON data
app.use(express.json());

// Endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

// Global Error Handler
app.use('*', globalErrorHandler);

module.exports = { app };
