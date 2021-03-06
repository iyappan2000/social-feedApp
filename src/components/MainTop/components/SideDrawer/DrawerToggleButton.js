import React from "react";
import "./DrawerToggleButton.css";
import { ImMenu } from "react-icons/im";
const DrawerToggleButton = (props) => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button__line">
      <ImMenu />
    </div>
    {/* <div className="toggle-button__line" />
    <div className="toggle-button__line" /> */}
  </button>
);

export default DrawerToggleButton;
