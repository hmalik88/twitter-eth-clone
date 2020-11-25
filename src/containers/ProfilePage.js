import React, { useContext, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import StoreContext from '../store';
import Layout from './Layout';

// const Layout = React.lazy(() => import('./Layout'));

function ProfilePage() {
    const context = useContext(StoreContext);
    const { username } = useParams();

    const fetchTweets = async () => {
        const reply = await context.getTweets(username);
        const json = await reply.json();
        if (reply.ok) context.setTweets(json);
        else context.logOutUser();
    }

    const fetchUserInfo = async () => {
        const reply = await context.getUserInfo(username);
        const json = await reply.json();
        if (reply.ok) context.setUserInfo(json);
        else context.logOutUser();
    }

    useEffect(() => {
        fetchUserInfo();
        fetchTweets();
    }, []);

    return (
        <div>  
            <Layout page={"profile"} />
            <div className="modal-overlay"></div>
        </div>
    
    )
}

export default ProfilePage;