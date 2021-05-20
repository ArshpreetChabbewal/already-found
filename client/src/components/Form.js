import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Form.css';
import { createPost } from '../actions/posts';

const Form = ({toggleForm, show, objectCreated, setObjectCreated}) => {

    const [postData, setPostData] = useState({ 
        title: '', 
        organization: '', 
        description: '', 
        hours: 0, 
    });

    const dispatch = useDispatch();

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
        if (objectCreated) {
            dispatch(createPost(postData));
            toggleForm();
        }
        setObjectCreated(false);
    }, [postData]);

    return (
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
    )
}

export default Form
