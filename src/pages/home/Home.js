// import Topbar from "../../components/topbar/Topbar";

import Feed from "../../components/Feed/Feed";

import "./Home.css";
import MainTop from "../../components/MainTop/MainTop";
import Leftbar from "../../components/Feed/Leftbar/Leftbar";
import Rightbar from "../../components/Feed/Rightbar/Rightbar";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const handleClick = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <MainTop handleClick={handleClick} />
      <div className="homeContainer">
        <Leftbar className="left" />
        <Feed search={search} />
        <Rightbar className="left" />
      </div>
    </>
  );
}
