import React, { useEffect, useState } from "react";
import "./People.css";
function People({data1,data2,data3}) {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    return fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setData(data.results));
  };

 
  console.log(datas);
  return (
    <div className="trendsBox">
      <div className="trendsBoxHead">
        <div className="topHead">
          <p style={{ marginLeft: "15px", fontWeight: "600" }}>
            People Near You
          </p>
          <div style={{ marginLeft: "119px", color: "orangered" }}>
            <p>view All</p>
          </div>
        </div>
        <hr style={{ color: "gray" }} />

        <div className="usersname">
          {datas.map((user) => {
            return (
              <div>
                <div className="userslist">
                  <div style={{ display: "flex" }}>
                    <img
                      key={user.id}
                      src={user.picture.medium}
                      alt={user.name}
                    />
                    <div>
                      <p>
                        {user.login.username}

                        <br />
                        <button className="btn3">follow</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="usersname">
          {data3.map((user) => {
            return (
              <div>
                <div className="userslist">
                  <div style={{ display: "flex" }}>
                    <img
                      key={user.id}
                      src={user.picture.medium}
                      alt={user.name}
                    />
                    <div>
                      <p>
                        {user.login.username}

                        <br />
                        <button className="btn3">follow</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="usersname">
          {data1.map((user) => {
            return (
              <div>
                <div className="userslist">
                  <div style={{ display: "flex" }}>
                    <img
                      key={user.id}
                      src={user.picture.medium}
                      alt={user.name}
                    />
                    <div>
                      <p>
                        {user.login.username}

                        <br />
                        <button className="btn3">follow</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="usersname">
          {data2.map((user) => {
            return (
              <div>
                <div className="userslist">
                  <div style={{ display: "flex" }}>
                    <img
                      key={user.id}
                      src={user.picture.medium}
                      alt={user.name}
                    />
                    <div>
                      <p>
                        {user.login.username}

                        <br />
                        <button className="btn3">follow</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <hr />
        <p style={{ paddingLeft: "20px", color: "orange", fontSize: "16px" }}>
          Find travelers with similiar interests
        </p>
      </div>
    </div>
  );
}

export default People;
