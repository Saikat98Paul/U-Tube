import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <a className="sidebar__link" href="https://www.youtube.com/feed/trending">
        <SidebarRow Icon={WhatshotIcon} title="Trending" />
      </a>
      <a className="sidebar__link" href="https://www.youtube.com/user/YTIndia">
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      </a>
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpOutlinedIcon} title=" Liked videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;
