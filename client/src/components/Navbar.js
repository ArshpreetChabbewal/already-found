import React from 'react'
import './Navbar.css'

const Navbar = ({toggleForm, show}) => {
    return (
        <div className="homepage__navbar">
            <img src="https://www.desicomments.com/wp-content/uploads/2017/07/Image-Of-Heart.png"
                    className="homepage__logo"/>
            <h1 className="homepage__title">Already Found!</h1>
            <button className={`${!show && "homepage__createPostButton"} 
                                ${show && "homepage__createPostButtonModified"}`} onClick={toggleForm}>
                + Create Post
            </button>
        </div>
    )
}

export default Navbar
