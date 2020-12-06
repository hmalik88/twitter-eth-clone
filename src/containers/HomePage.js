import React, { useContext, useEffect } from 'react';
import StoreContext from '../store';
import Layout from './Layout';


function HomePage() {
    const context = useContext(StoreContext);
    const { isTagging, offset } = context;
    
    useEffect(() => {
        const fetchTimeline = async () => {
            const reply = await context.getTimeline();
            const json = await reply.json();
            if (reply.ok) context.setTimeline(json.timeline);
            else context.logOutUser();
        }
        fetchTimeline();
    }, []);

    return (
        <div>
            <Layout page={"home"} />
            {isTagging ? (<div className="tag-modal" style={{top: offset}}></div>) : null}
        </div>
    )
}

export default HomePage;