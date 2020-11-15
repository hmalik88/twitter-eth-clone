import React, { useState } from 'react';

function ProfileFilter() {

    const turnOffFilters = () => {
        const filters = [...document.querySelector('.profile-filter').children]
        filters.forEach(filter => filter.classList.remove('filter-selected'));
    }

    const handleChange = e => {
        turnOffFilters();
        if (e.target.classList.contains('filter-box')) e.target.classList.add('filter-selected');
        else e.target.parentElement.classList.add('filter-selected');        
    }

    return(
        <div className="profile-filter">
            <div className="filter-box filter-selected" onClick={handleChange}>
                <span>Tweets</span>
            </div>
            <div className="filter-box" onClick={handleChange}>
                <span>Tweeths</span>
            </div>
            <div className="filter-box" onClick={handleChange}>
                <span>Likes</span>
            </div>
        </div>
    )
}

export default ProfileFilter;

