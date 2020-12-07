import React, { useContext, useEffect } from 'react';
import StoreContext from '../store';
import Layout from './Layout';
import ClickAwayListener from 'react-click-away-listener';


function HomePage() {
    const context = useContext(StoreContext);
    const { offset, isTagging, setTagging } = context;
    
    useEffect(() => {
        const fetchTimeline = async () => {
            const reply = await context.getTimeline();
            const json = await reply.json();
            if (reply.ok) context.setTimeline(json.timeline);
            else context.logOutUser();
        }
        fetchTimeline();
    }, []);

    const handleClickAway = () => setTagging(false);

    return (
            <div>
                <Layout page={"home"} />
                <ClickAwayListener onClickAway={handleClickAway} className='click-away' style={{backgroundColor: "rgb(23,32,42)"}}>
                    <div className="tag-modal" style={{top: offset, display: isTagging ? 'block' : 'none'}}></div>)
                </ClickAwayListener>
            </div>
    )
}

export default HomePage;