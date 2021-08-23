import React from "react";
import Groups from "./Groups";
import "./Leftbar.css";
import Places from "./Places";
import Trendsbar from "./Trendsbar";
function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <Trendsbar />
        <br />
        <Places />
        <br />
        <Groups />
      </div>
    </div>
  );
}

export default Leftbar;
