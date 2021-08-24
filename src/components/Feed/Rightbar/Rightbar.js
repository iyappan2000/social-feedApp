import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import News from "./News";
import People from "./People";
import "./Rightbar.css";
function Rightbar() {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    fetchData1();
  }, []);

  const fetchData1 = () => {
    return fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setData1(data.results));
  };

  const [data2, setData2] = useState([]);

  useEffect(() => {
    fetchData2();
  }, []);
  const fetchData2 = () => {
    return fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setData2(data.results));
  };
  const [data3, setData3] = useState([]);

  useEffect(() => {
    fetchData3();
  }, []);
  const fetchData3 = () => {
    return fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setData3(data.results));
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <People data1={data1} data2={data2} data3={data3} />
        <br />
        <News />
      </div>
    </div>
  );
}

export default Rightbar;
