import React, { useState } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

function MainTop({ handleClick }) {
  const [sideOpen, setSideOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideOpen((prevState) => {
      return { sideOpen: !prevState.sideOpen };
    });
  };

  const backdropClickHandler = () => {
    setSideOpen(false);
    console.log("ok");
  };
  let backdrop;
  if (sideOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <div style={{ height: "100%" }}>
      <Toolbar
        drawerClickHandler={drawerToggleClickHandler}
        handleClick={handleClick}
      />
      <SideDrawer show={sideOpen} />
      {sideOpen && <Backdrop click={backdropClickHandler} />}
      <div>{backdrop}</div>
      <main style={{ marginTop: "64px" }}></main>
    </div>
  );
}

export default MainTop;
