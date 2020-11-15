import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from "@material-ui/core";
import widgetArrow from '../assets/widget-arrow.svg';
import arrowTip from '../assets/arrow-tip.svg';
import selectedTip from '../assets/arrow-tip-selected.svg';
import '../scss/LogOutWidget.scss';

function LogOutWidget() {

    const [isWidgetOpen, setWidget] = useState(false);

    const handleHover = () => {
        const tip = document.querySelector('.popout-arrow');
        tip.src = selectedTip;
    }

    const handleLeave = () => {
        const tip = document.querySelector('.popout-arrow');
        tip.src = arrowTip;
    }

    const toggleWidget = () => {
        const widget = document.querySelector('.widget-popout');
        const tip = document.querySelector('.popout-arrow');
        if (isWidgetOpen) {
            setWidget(false);
            widget.style.visibility = "hidden";
            tip.style.visibility = "hidden";
        } else {
            setWidget(true);
            widget.style.visibility = "visible";
            tip.style.visibility = "visible";
        }
    }

    return(
        <div>
            <div className="widget-popout" style={{visibility: "hidden"}}>
                <Link to="/logout" className="logout-link">
                    <div className="widget-popout-body" onMouseLeave={handleLeave} onMouseOver={handleHover}>
                        <span>Log out @hbm88</span>
                    </div>
                </Link>
            </div>
            <div className="widget-tip">
                <img 
                    src={arrowTip} 
                    className="popout-arrow" 
                    alt=""
                    style={{visibility: "hidden"}} 
                />
            </div>
            <div className="log-out-widget">
                <div className="widget-avatar">
                    <Avatar />
                </div>
                <div className="log-out-widget-info">
                    <div className="name-widget">
                        <span>Hassan</span>
                    </div>
                    <div className="username-widget">
                        <span>@hbm88</span>
                    </div>
                </div>
                    <img src={widgetArrow} 
                        alt="" 
                        className="widget-arrow" 
                        onClick={toggleWidget}
                    />
            </div>
        </div>
    )
}

export default LogOutWidget;