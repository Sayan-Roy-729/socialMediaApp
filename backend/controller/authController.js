const { validationResult } = require('express-validator');

const User = require('../models/user');

module.exports.signUpHandler = (req, res, next) => {
  // validation
  // const errors = validationResult(req);
  // console.log('[authController] validation error', errors);
  // if (!errors) {
  //   const error = new Error('Validation failed!');
  //   error.statusCode = 422;
  //   error.data = errors.array();
  //   throw error;
  // }

  // validation
  const errors = validationResult(req);
  
  console.log('[authController] validation error before, ', errors.array());
  if (!errors) {
    console.log('[authController] validation error, ', errors);
    const error = new Error('Validation failed');
    error.statusCode = 422;
    throw error;
  }

  const { name, email, password } = req.body;

  User.findOne({ email: email })
    .then((user) => {
      console.log('authController', user);
      if (user) {
        const error = new Error('User already exists');
        error.statusCode = 409;
        throw error;
        // return res.status(409).json({message: 'User already exists'});
      }

      const newUser = new User({ name, email, password });
      // newUser.save();
      res.status(200).json('User created successfully');
    })
    .catch((err) => {
      if (!err.statusCode) {
        console.log('[router/auth.js]', err);
        err.statusCode = 500;
      }
      next(err);
    });
};
