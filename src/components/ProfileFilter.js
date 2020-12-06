import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import StoreContext from '../store';

function ProfileFilter() {
    const context = useContext(StoreContext);
    const { username } = useParams();

    const turnOffFilters = () => {
        const filters = [...document.querySelector('.profile-filter').children]
        filters.forEach(filter => filter.classList.remove('filter-selected'));
    }

    const handleChange = e => {
        turnOffFilters();
        if (e.target.classList.contains('filter-box')) e.target.classList.add('filter-selected');
        else e.target.parentElement.classList.add('filter-selected');
        const filter = e.target.id ? e.target.id : e.target.parentElement.id;
        fetchResource(filter);
    }

    const fetchResource = async (resource) => {
        let reply;
        switch (resource) {
            case 'Tweets':
                reply = await context.getTweets(username);
                break;
            case 'Tweeths': 
                reply = await context.getTweeths(username);
                break;
            case 'Likes':
                reply = await context.getLikes(username);
                break;
            default:
                break;
        }
        const json = await reply.json();
        if (reply.ok) {
            context.setFilter(resource);
            context[`set${resource}`](json[resource.toLowerCase()]);
        }
        else console.log('something\'s off...');
    }

    return(
        <div className="profile-filter">
            <div className="filter-box filter-selected" id="Tweets" onClick={handleChange}>
                <span>Tweets</span>
            </div>
            <div className="filter-box" id="Tweeths" onClick={handleChange}>
                <span>Tweeths</span>
            </div>
            <div className="filter-box" id="Likes" onClick={handleChange}>
                <span>Likes</span>
            </div>
        </div>
    )
}

export default ProfileFilter;

