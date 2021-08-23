// import Topbar from "../../components/topbar/Topbar";

import Feed from "../../components/Feed/Feed";

import "./Home.css";
import MainTop from "../../components/MainTop/MainTop";
import Leftbar from "../../components/Feed/Leftbar/Leftbar";
import Rightbar from "../../components/Feed/Rightbar/Rightbar";

export default function Home() {
  return (
    <>
      <MainTop />
      <div className="homeContainer">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
