import React from 'react';
import sparkles from '../assets/sparkle.svg';
import '../scss/HomeHeader.scss';

function HomeHeader() {
    return(
        <div className="feed-header">
            <h2>Home</h2>
            <div><img src={sparkles} className="sparkles" alt="sparkles"/></div>
        </div>
    )
}

export default HomeHeader;
