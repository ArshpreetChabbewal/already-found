import React from 'react'
import './Banner.css'

const Banner = ({show, toggleForm}) => {
    return (
        <div className="banner">
            <h1 className="banner__header">Search with ease!</h1>
            <p className="banner__content">
                Already found is a fast and easy way to connect aspiring volunteers to their desired positions.
                There are so many ways YOU can give back to the community, and help those in need.
                Search through dozens of postings in only under a few minutes with our compact cards that flip as you 
                hover over them, instantly viewing concise information about each position. 
            </p>
            <button className="banner__createPostButton" onClick={toggleForm}>
                + Create Post
            </button>
            <h4 className="banner__view">Available Openings</h4>
        </div>
    )
}

export default Banner
