import React from 'react'
import moment from 'moment';
import './Post.css';
import { useDispatch } from 'react-redux';
import { deletePost } from '../actions/posts';

const Post = ({ post }) => {

    const dispatch = useDispatch();

    const truncate = (desc, max) => {
        return desc?.length > max ? desc.substr(0, max - 1) + '...' : desc;  
    }

    return (
        <div className="post">
                <div className="post__front post__face">
                    <h6 className="post__frontTime">{moment(post.createdAt).fromNow()}</h6>
                    <h1 className="post__frontTitle">{truncate(post.title, 100)}</h1>
                    <h2 className="post__frontBar">_______________</h2>
                    <h3 className="post__frontOrg">{post.organization}</h3>
                    <h4 className="post__frontHours">Total Hours: {post.hours}</h4>
                </div>
                <div className="post__back post__face">
                    <div className="post__backContent middle">
                        <h5 className="post__backDesc">{truncate(post.description, 150)}</h5>
                        <div className="post__backButton">
                            <button className="post__delete" onClick={() => dispatch(deletePost(post._id))}>Delete</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Post
