import React from 'react';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';

const Navbar = ({toggleForm, show}) => {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <img src="https://www.desicomments.com/wp-content/uploads/2017/07/Image-Of-Heart.png"
                        className="navbar__logo"/>
                <h1 className="navbar__title">Already Found!</h1>
            </div>
            <div className="navbar__search">
                <input className="navbar__searchBar"/>
                <button className="navbar__searchButton">
                    <SearchIcon color={'secondary'}/>
                </button>
            </div>
            <button className={`${!show && "navbar__createPostButton"} 
                                ${show && "navbar__createPostButtonModified"}`} onClick={toggleForm}>
                + Create Post
            </button>
        </div>
    )
}

export default Navbar
