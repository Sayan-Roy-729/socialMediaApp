const router = require('express').Router();
const { body } = require('express-validator');

const authController = require('../controller/authController');

// /api/v1/signup [POST]
router.post(
  '/signup',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email'),
    body('password').trim().isLength({ min: 6 }),
    body('name').trim().not().isEmpty(),
  ],
  authController.signUpHandler
);

// /api/v1/signin [POST]
router.post('/signin', authController.signinHandler);

module.exports = router;
