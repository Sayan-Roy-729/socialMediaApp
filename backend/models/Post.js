const mongoose = require('mongoose');

const schema = mongoose.Schema;

const postSchema = schema({
    imageUrl: {
        type: String,
    },
    description: {
        type: String,
    },
    likes: {
        type: Number,
        default: 0,
    },
    dislike: {
        type: Number,
        default: 0,
    },
    postId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    comments: [
        {
            userId: {
                type: mongoose.Types.ObjectId,
                ref: 'User',
            },
            comment: {
                type: String,
            }
        }
    ]
}, { timestamp: true });

module.exports = mongoose.model('Post', postSchema);