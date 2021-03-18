const express = require('express');
const env = require('dotenv');

const mongodbConnection = require('./config/db');

const app = express();

// Config environmental variables
env.config();

// Activate body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routers
app.use('/api/v1/', require('./router/auth'));

// Error middleware
app.use((error, req, res, next) => {
  if (!error.statusCode) {
    error.statusCode = 500;
  }
  res.status(error.statusCode).json({ message: error.message });
});

const PORT = process.env.LOCAL_PORT || 8080;
app.listen(PORT, () => {
  mongodbConnection();
  console.log(`Server started on port ${PORT}`);
});