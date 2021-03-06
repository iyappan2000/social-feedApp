import React, { useEffect, useState } from "react";
import "./Trendsbar.css";
function Trendsbar() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    asyncTrendsFetch();
  }, []);

  async function asyncTrendsFetch() {
    const res = await fetch(
      "https://api.ritekit.com/v1/search/trending?green=1&latin=1"
    );
    const receivedData = await res.json();
    setData([receivedData]);
  }

  return (
    <div className="trendsBox">
      <div className="trendsBoxHead">
        <div className="topHead">
          <p className="topLeft">Trends</p>
          <div className="topRight">
            <p>Change</p>
          </div>
        </div>{" "}
        <div className="trendsTags">
          <ul>
            {datas.map((user) => {
              return (
                <div>
                  <li key={user.id}>#{user.tags[0].tag}</li>
                  <li key={user.id}>#{user.tags[1].tag}</li>
                  <li key={user.id}>#{user.tags[2].tag}</li>
                  <li key={user.id}>#{user.tags[3].tag}</li>
                  <li key={user.id}>#{user.tags[4].tag}</li>
                  <li key={user.id}>#{user.tags[5].tag}</li>
                  <li key={user.id}>#{user.tags[6].tag}</li>
                  <li key={user.id}>#{user.tags[7].tag}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Trendsbar;
