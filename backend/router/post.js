const path = require('path');
const express = require('express');
const multer = require('multer');

const postController = require('../controller/postController');

const router = express.Router();

//! Check file type [Only Image file is accepted]
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

//! Handle the profile picture file
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

//! Only allow 5mb image files
let upload = multer({
    storage,
    limits: { fileSize: 1000000 * 5 },
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    },
}).single('imagePost');

// ! /api/v1/post/get [GET]
router.get('/get', postController.getPostController);

//! /api/v1/post/create [POST]
router.post('/create', upload, postController.createPostController);

//! /api/v1/post/update [PUT]
router.put('/update', postController.updateController);

// ! /api/v1/post/delete [DELETE]
router.delete('/delete', postController.deletePost);

module.exports = router;