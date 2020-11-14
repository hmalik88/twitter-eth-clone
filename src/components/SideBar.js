import React, { useState } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import userAvatar from "../assets/user.svg";
import widgetArrow from '../assets/widget-arrow.svg';
import arrowTip from '../assets/arrow-tip.svg';
import selectedTip from '../assets/arrow-tip-selected.svg';

function Sidebar() {

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


  return (
    <div className="sidebar-container">
        <div className="sidebar">
            <div className="sidebar-top">
                <Link href="/home">
                    <TwitterIcon className="sidebar-twitterIcon mobileHidden" />
                </Link>
                <SidebarOption active Icon={HomeIcon} text="Home" href="/home" />
                <SidebarOption Icon={SearchIcon} text="Explore" href="/home" />
                <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" href="https://github.com/hmalik88" />
                <SidebarOption Icon={MailOutlineIcon} text="Messages" href="https://www.linkedin.com/in/hassan-b-malik/" />
                <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" mobileHidden href="https://leetcode.com/hbmalik88/" />
                <SidebarOption Icon={ListAltIcon} text="Lists" mobileHidden href="/home" />
                <SidebarOption Icon={PermIdentityIcon} text="Profile"  href="/home" />
                <SidebarOption Icon={MoreHorizIcon} text="More" mobileHidden href="/home" />
                <div className="sidebar-tweet-btn">
                    <span>Tweet</span>
                </div>
            </div>
            <div className="sidebar-bottom">
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
                        <Avatar src={userAvatar} />
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
        </div>
    </div>
  );
}

export default Sidebar;
