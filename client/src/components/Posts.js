import React from 'react';
import { useSelector } from 'react-redux'; 
import { Grid } from '@material-ui/core';

import Post from './Post';


const Posts = () => {
    const posts = useSelector(state => state.posts);

    return (
        <Grid container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={3}>
                    <Post post={post}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default Posts
