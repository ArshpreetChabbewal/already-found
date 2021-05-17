import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    organization: String,
    description: String,
    hours: Number,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostLayout = mongoose.model('PostLayout', postSchema);

export default PostLayout;