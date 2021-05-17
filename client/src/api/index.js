import axios from 'axios';

const url = 'https://already-found.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const uploadPost = (newPost) => axios.post(url, newPost);
export const removePost = (id) => axios.delete(`${url}/${id}`);
