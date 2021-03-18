const router = require('express').Router();
const { body, validationResult } = require('express-validator');

const User = require('../models/user');
const middleware = require('../middleware/validation');
const authController = require('../controller/authController');

// /api/v1/signup [POST]
router.post(
  '/signup',
  [body('name').trim().isEmpty()],
  // [
  //   body('email')
  //     .isEmail()
  //     .withMessage('Please enter a valid email'),
  //   body('password').trim().isLength({ min: 6 }),
  //   body('name').trim().isEmpty().not(),
  // ],
  // middleware.authValidation,
  authController.signUpHandler
);

router.post(
  '/testvalidator',
  [body('name').trim().isEmpty().withMessage('Please enter a valid name')],
  (req, res, next) => {
    console.log("name field ", req.body.name);
    const errors = validationResult(req);
    console.log('[auth.js] validation error before', errors);
    if (!errors) {
      console.log('[auth.js] validation error', errors);
      const errors = new Error('Validation failed');
      errors.statusCode = 409;
      throw errors;
    }
    res.status(200).json({message: 'Ok!'});
  }
);

module.exports = router;
