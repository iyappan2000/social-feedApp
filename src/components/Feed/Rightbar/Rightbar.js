import React from "react";
import News from "./News";
import People from "./People";
import "./Rightbar.css";
function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <People />
        <br />
        <News />
      </div>
    </div>
  );
}

export default Rightbar;
