import { fetchPosts, uploadPost, removePost } from '../api/index';

export const getPosts = () => async (dispatch) => {
    console.log('looking for posts');
    try {
        console.log('fetching posts');
        const { data } = await fetchPosts();
        console.log(data);
        console.log('gottheposts');

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await uploadPost(post);
        console.log(data);
        dispatch({ type: 'CREATE', payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const deletePost = (id, post) => async (dispatch) => {
    try {
        await removePost(id);
        dispatch({ type:'DELETE', payload: id });
    } catch (err) {
        console.log(err);
    }
}