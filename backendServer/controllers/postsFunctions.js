import PostLayout from '../models/postLayout.js';
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostLayout.find();

        res.status(200).json(postMessages);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const createPost = async (req, res) => {
    const newPost = new PostLayout(req.body)

    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Post does not exist');

    await PostLayout.findByIdAndRemove(id);

    res.json({ message: 'Success'});
}