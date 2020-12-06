import React, { useContext } from "react";
import { useLocation } from 'react-router-dom';
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "../components/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link } from "react-router-dom";
import LogOutWidget from "../components/LogOutWidget";
import StoreContext from '../store';
import '../scss/SideBar.scss';


function Sidebar() {
    const context = useContext(StoreContext);
    const { userName } = context;
    const path = useLocation().pathname


  return (
    <div className="sidebar-container">
        <div className="sidebar">
            <div className="sidebar-top">
                <Link to="/home">
                    <TwitterIcon className="sidebar-twitterIcon mobileHidden" />
                </Link>
                <SidebarOption active={path === '/home'} Icon={HomeIcon} text="Home" href="/home"/>
                <SidebarOption Icon={SearchIcon} text="Explore" href="/home"  optNum={2}  />
                <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" href="https://github.com/hmalik88" />
                <SidebarOption Icon={MailOutlineIcon} text="Messages" href="https://www.linkedin.com/in/hassan-b-malik/" />
                <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" mobileHidden href="https://leetcode.com/hbmalik88/" />
                <SidebarOption Icon={ListAltIcon} text="Lists" mobileHidden href="/home" />
                <SidebarOption active={path !== '/home'} Icon={PermIdentityIcon} text="Profile"  href={`/${userName}`} />
                <SidebarOption Icon={MoreHorizIcon} text="More" mobileHidden href="/home" />
                <div className="sidebar-tweet-btn">
                    <span>Tweet</span>
                </div>
            </div>
            <div className="sidebar-bottom">
                <LogOutWidget />
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
