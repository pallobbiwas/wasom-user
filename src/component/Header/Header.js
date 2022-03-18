import React from 'react';
import "./Header.css";

const Header = (props) => {
    return (
        <div className='row p-5'>
            <div className='col-md-3 '><h1>Logo</h1></div>
            <div className='col-md-9'>
                <ul className=' ul-container'>
                    <li>Home</li>
                    <li className='ms-3 me-3'>About</li>
                    <li className='ms-3 me-3'>Blog </li>
                    <li>Order <sup>{props.count}</sup></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;