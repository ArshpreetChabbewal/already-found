import React, { useState, useEffect } from 'react'
import './Homepage.css';
import { useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import Form from '../components/Form';

import { getPosts, createPost } from '../actions/posts';

import Posts from '../components/Posts';

const Homepage = () => {
    const [show, setShow] = useState(false);
    const [objectCreated, setObjectCreated] = useState(false);

    const dispatch = useDispatch();

    const toggleForm = () => {
        setShow(!show);
        setObjectCreated(true);
        if (show) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }

    useEffect(() => {
        console.log('getting posts');
        dispatch(getPosts());
        console.log('gotposts');
    }, [dispatch]);


    return (
        <div className={`homepage ${show && 'homepage__preventScroll'}`}>
            <Form toggleForm={toggleForm} show={show} objectCreated={objectCreated} setObjectCreated={setObjectCreated}/>
            <Navbar toggleForm = {toggleForm} show={show}/>
            <div className="homepage__posts">
                <Posts />
            </div>
        </div>

    )
}

export default Homepage
