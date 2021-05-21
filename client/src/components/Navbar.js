import React from 'react';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Navbar = ({toggleForm, show}) => {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <img src="https://www.desicomments.com/wp-content/uploads/2017/07/Image-Of-Heart.png"
                        className="navbar__logo"/>
                <h1 className="navbar__title">Already Found!</h1>
            </div>
            <div className="navbar__search">
                <input className="navbar__searchBar" value="Coming Soon!"/>
                <button className="navbar__searchButton">
                    <div className="navbar__searchIcon">
                        <SearchIcon/>
                    </div>
                </button>
            </div>
            <div className="navbar__icons">
                <div className="navbar__twitter">
                    <TwitterIcon fontSize='large'/>
                </div>
                <div className="navbar__instagram">
                    <InstagramIcon fontSize='large' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
