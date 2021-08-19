import "./Topbar.css";
import { Search } from "@material-ui/icons";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import Button from "@material-ui/core/Button";
import RedditIcon from "@material-ui/icons/Reddit";
import { useState } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import MenuIcon from "@material-ui/icons/Menu";
export default function Topbar() {
  const [isMobile, setisMobile] = useState(false);
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="topbarLinks">
          {" "}
          <button className="menu-icon">
            {isMobile ? <HighlightOffIcon /> : <MenuIcon />}
          </button>
          <Button className="topbarLink">
            <HomeOutlinedIcon className="icon" />{" "}
            <span className="iconName">Homepage</span>
          </Button>
          <Button className="topbarLink">
            <NotificationsActiveOutlinedIcon className="icon" />
            <span className="iconName">Notifications</span>
          </Button>
          <Button className="topbarLink">
            <MessageOutlinedIcon className="icon" />
            <span className="iconName">Messages</span>
          </Button>
        </div>
        <div className="topbarCenter" style={{ display: "flex" }}>
          <RedditIcon style={{ color: "red" }} />
          <span className="logo">InstaBook</span>
        </div>
        <div className="topbarRight">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input placeholder="Search..." className="searchInput" />
          </div>
        </div>{" "}
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        <button
          style={{
            padding: "0 30px",
            background: "orange",
            border: "transparent",
            cursor: "pointer",
            borderRadius: "10px",
          }}
        >
          Add Post
        </button>
        {/* <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        
        */}
      </div>
    </div>
  );
}
