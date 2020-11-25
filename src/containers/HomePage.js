import React, { useContext, useEffect } from 'react';
import StoreContext from '../store';
import Layout from './Layout';


function HomePage() {
    const context = useContext(StoreContext);

    const fetchTimeline = async () => {
        const reply = await context.getTimeline();
        const json = await reply.json();
        if (reply.ok) context.setTimeline(json);
        else context.logOutUser();
    }

    useEffect(() => {
        fetchTimeline();
    }, []);

    return <Layout page={"home"} />
}

export default HomePage;