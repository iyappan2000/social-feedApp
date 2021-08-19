import React from "react";

import "./SideDrawer.css";
import "../../../topbar/Topbar.css";
import { Search } from "@material-ui/icons";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <div>
          <div style={{ marginLeft: "-30px", marginBottom: "20px" }}>
            <Search className="searchIcon" />
            <input placeholder="Search..." className="searchInput" />
          </div>
        </div>
        <li>
          <div>
            <div></div>
          </div>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Notifications</a>
        </li>
        <li>
          <a href="/">messages</a>
        </li>
        <button
          style={{
            marginLeft: "-30px",
            marginBottom: "20px",
            width: "130px",
            marginTop: "20px",
            background: "orange",
            border: "transparent",
            height: "30px",
            borderRadius: "10px",
          }}
        >
          add post
        </button>
      </ul>
    </nav>
  );
};

export default SideDrawer;
