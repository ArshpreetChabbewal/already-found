import React, { useState, useEffect } from 'react'
import './Homepage.css';
import { useDispatch } from 'react-redux';

import { getPosts, createPost } from '../actions/posts';

import Posts from '../components/Posts';

const Homepage = () => {
    const [objectCreated, setObjectCreated] = useState(false);
    const [show, setShow] = useState(false);
    const [postData, setPostData] = useState({ 
        title: '', 
        organization: '', 
        description: '', 
        hours: 0, 
    });

    const dispatch = useDispatch();

    const toggleForm = () => {
        setShow(!show);
        setObjectCreated(true);
        if (show) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        setPostData({
            title: document.getElementById("form__inputTitle").value,
            organization: document.getElementById("form__inputOrganization").value, 
            description: document.getElementById("form__inputDescription").value, 
            hours: document.getElementById("form__inputHours").value, 
        });
    }

    const clearForm = () => {
        document.getElementById("form__inputTitle").value = '';
        document.getElementById("form__inputOrganization").value = '';
        document.getElementById("form__inputDescription").value = '';
        document.getElementById("form__inputHours").value = '';
    }

    useEffect(() => {
        console.log('getting posts');
        dispatch(getPosts());
        console.log('gotposts');
    }, [dispatch])

    useEffect(() => {
        if (objectCreated) {
            dispatch(createPost(postData));
            toggleForm();
        }
        setObjectCreated(false);
    }, [postData]);


    return (
        <div className={`homepage ${show && 'homepage__preventScroll'}`}>
            <div className={`homepage__form ${!show && 'homepage__hideCreate'}`}>
                <div className="form__fadedBackground">
                <div className="form">
                    <div className="form__heading">
                        <h1 className="form__title">Create a Post!</h1>
                        <button className="form__exitButton" onClick={toggleForm}>Exit</button>
                    </div>
                    <div className="form__body">
                            <h3>Title</h3>
                            <input className="form__input" id="form__inputTitle" type="text"/>
                            <h3>Organization</h3>
                            <input className="form__input" id="form__inputOrganization" type="text"/>
                            <h3>Description</h3>
                            <textarea className="form__input" id="form__inputDescription" rows="3"></textarea>
                            <h3>Number of Hours</h3>
                            <input className="form__input" id="form__inputHours" type="number" />
                    </div>
                    <button className="form__submit" onClick={submitForm}>Submit</button>
                    <button className="form__clear" onClick={clearForm}>Clear</button>
                </div>
            </div>
            </div>
            <div className="homepage__navbar">
                <img src="https://www.desicomments.com/wp-content/uploads/2017/07/Image-Of-Heart.png"
                      className="homepage__logo"/>
                <h1 className="homepage__title">Already Found!</h1>
                <button className={`${!show && "homepage__createPostButton"} 
                                    ${show && "homepage__createPostButtonModified"}`} onClick={toggleForm}>
                    + Create Post
                </button>
            </div>
            <div className="homepage__posts">
                <Posts />
            </div>
        </div>

    )
}

export default Homepage
