import React from "react";
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
import { Button } from "@material-ui/core";
import Link from "@material-ui/core/Link";

function Sidebar() {
  return (
    <div className="sidebar-container">
        <div className="sidebar">
            <div className="sidebar-top">
                <Link href="/home">
                    <TwitterIcon className="sidebar-twitterIcon mobileHidden" />
                </Link>
                <SidebarOption active Icon={HomeIcon} text="Home" href="#" />
                <SidebarOption Icon={SearchIcon} text="Explore" href="#" />
                <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" href="https://github.com/hmalik88" />
                <SidebarOption Icon={MailOutlineIcon} text="Messages" href="https://www.linkedin.com/in/hassan-b-malik/" />
                <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" mobileHidden href="https://leetcode.com/hbmalik88/" />
                <SidebarOption Icon={ListAltIcon} text="Lists" mobileHidden href="#" />
                <SidebarOption Icon={PermIdentityIcon} text="Profile"  href="/" />
                <SidebarOption Icon={MoreHorizIcon} text="More" mobileHidden href="#" />
                <div className="sidebar-tweet-btn">
                    <span>Tweet</span>
                </div>
            </div>
            <div className="sidebar-bottom">

            </div>
        </div>
    </div>
  );
}

export default Sidebar;
