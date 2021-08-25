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
      <p style={{ color: "grey", padding: "20px 0 0 30px" }}>
        Privacy Policy - Terms of Sevice -Maps Terms
      </p>
    </div>
  );
}

export default Leftbar;
