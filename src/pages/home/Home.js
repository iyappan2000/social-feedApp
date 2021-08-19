// import Topbar from "../../components/topbar/Topbar";

import Feed from "../../components/Feed/Feed";

import "./Home.css";
import MainTop from "../../components/MainTop/MainTop";

export default function Home() {
  return (
    <>
      <MainTop />
      <div className="homeContainer">
        {/* <Sidebar /> */}
        <Feed />
        {/* <Rightbar/> */}
      </div>
    </>
  );
}
