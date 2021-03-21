const path = require('path');
const router = require('express').Router();
const { body } = require('express-validator');
const multer = require('multer');

const authController = require('../controller/authController');

// Check file type [Only Image file is accepted]
const checkFileType = (file, cb) => {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
    );
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
};

// Handle the profile picture file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.random() * 1e9}-${path.extname(
            file.originalname
        )}`;
        cb(null, uniqueName);
    },
});

// Only allow 5mb image files
let upload = multer({
    storage,
    limits: { fileSize: 1000000 * 5 },
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    },
}).single('profileImage');

// ! /api/v1/signup [POST]
router.post(
    '/signup',
    upload,
    [
        body('email').isEmail().withMessage('Please enter a valid email'),
        body('password').trim().isLength({ min: 6 }),
        body('name').trim().not().isEmpty(),
    ],
    authController.signUpHandler
);

// ! /api/v1/signin [POST]
router.post('/signin', authController.signinHandler);

module.exports = router;
