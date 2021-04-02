const Post = require('../models/Post');

// ! Get All Post
module.exports.getPostController = (req, res, next) => {
    Post.find()
        .then((post) => {
            if (!post) {
                const error = new Error('Post not found');
                error.statusCode = 404;
                throw error;
            }

            res.status(200).json({ post: post });
        })
        .catch((error) => {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        });
};

// ! Create New Post Controller
module.exports.createPostController = async (req, res, next) => {
    let imageUrl;
    if (req.file.filename) {
        imageUrl = req.file.path;
    }

    let description = req.body.description;

    const newPost = await new Post({
        imageUrl,
        description,
    });
    newPost.save();
    res.status(200).json({ message: 'Post created successfully!' });
};

//! Update Post Controller
module.exports.updateController = (req, res, next) => {
    let imageUrl;
    if (req.file.filename) {
        imageUrl = req.file.path;
    }

    let description = req.body.description;

    Post.findOne({ postId: userId })
        .then((user) => {
            if (!user) {
                const error = new Error('User is not defined');
                error.statusCode = 404;
                throw error;
            }

            user.update(imageUrl, description);
            res.status(200).json({ message: 'Post updated successfully' });
        })
        .catch((error) => {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        });
};

// ! Delete Post Controller
module.exports.deletePost = (req, res, next) => {
    Post.findOneAndRemove({ postId: req.body.userId }, (err, result) => {
        if (err) {
            err.statusCode = 204;
            return next(err);
        }
        res.status(200).json({ message: 'Deleted successfully' });
        print(result);
    });
};
