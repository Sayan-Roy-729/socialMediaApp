const { validationResult } = require('express-validator');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// ! New User Sign Up Handler
module.exports.signUpHandler = (req, res, next) => {
  // validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ ...errors, message: 'Validation failed!' });
  }

  // fetch data from the request
  const { name, email, password } = req.body;

  User.findOne({ email: email })
    .then((user) => {
      // Check if user already exists or not
      if (user) {
        const error = new Error('User already exists');
        error.statusCode = 409;
        throw error;
      }

      // Encrypt the password
      const encryptedPassword = CryptoJS.AES.encrypt(
        password,
        process.env.SECRET_APP_KEY
      ).toString();

      // If user not exists, then create new user and save into database
      const newUser = new User({ name, email, password: encryptedPassword });
      newUser.save();
      res.status(200).json('User created successfully');
    })
    .catch((err) => {
      // If there is any error, then handle it
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// ! User Sign In Handler
module.exports.signinHandler = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      // Check user is exists or not
      if (!user) {
        const error = new Error('User is not exists!');
        error.statusCode = 401;
        throw error;
      }

      // Decrypt the password
      const bytes = CryptoJS.AES.decrypt(
        user.password,
        process.env.SECRET_APP_KEY
      );
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

      // check password is matched or not
      if (req.body.password !== originalPassword) {
        const error = new Error('Password is not matched!');
        error.statusCode = 401;
        throw error;
      }

      // generate json web token
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.SECRET_APP_KEY,
        { expiresIn: '1h' }
      );

      // send response
      res.status(200).json({ token: token, userId: user._id });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
