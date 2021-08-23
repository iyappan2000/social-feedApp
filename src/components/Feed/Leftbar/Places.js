import React from "react";
import "./Places.css";

function Places() {
  return (
    <div className="trendsBox">
      <div className="trendsBoxHead">
        <div className="topHead">
          <p style={{ marginLeft: "15px", fontWeight: "600" }}>
            Places Near You
          </p>
          <div style={{ marginLeft: "130px", color: "orangered" }}>
            <p>view All</p>
          </div>
        </div>
        <hr />
        <div></div>
      </div>
    </div>
  );
}

export default Places;
