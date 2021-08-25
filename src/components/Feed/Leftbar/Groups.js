import React, { useEffect, useState } from "react";
import "./Groups.css";
function Groups() {
  const [datas, setData] = useState([]);
  useEffect(() => {
    Groups();
  }, []);
  async function Groups() {
    const res = await fetch(
      "https://6125f64e2d4e0d0017b6c582.mockapi.io/groupapi/api/json"
    );
    const data = await res.json();
    setData([data]);
  }
  console.log(datas);
  return (
    <div className="trendsBox">
      <div className="trendsBoxHead">
        <div className="topHead" style={{ paddingBottom: "14px" }}>
          <p style={{ marginLeft: "15px", fontWeight: "600" }}>Groups</p>
          <div className="topRight">
            <p>view All</p>
          </div>
        </div>

        <div>
          <div className="userlist">
            {datas.map((user) => {
              return (
                <div>
                  <div style={{ display: "flex" }} key={user.id}>
                    <img src={user[0].groupIcon} alt={user[0].id} />
                    <div>
                      <p
                        style={{
                          color: "orangered",
                          fontWeight: "600",
                          fontSize: "15px",
                        }}
                      >
                        {user[0].groupName}
                      </p>
                      <p style={{ color: "gray", marginTop: "-17px" }}>
                        {user[0].members} members
                      </p>
                    </div>
                    <div>
                      <button className="joinbtn">Join</button>
                    </div>
                  </div>
                  <div style={{ display: "flex" }} key={user.id}>
                    <img src={user[1].groupIcon} alt={user[0].id} />
                    <div>
                      <p
                        style={{
                          color: "orangered",
                          fontWeight: "600",
                          fontSize: "15px",
                        }}
                      >
                        {user[1].groupName}
                      </p>
                      <p style={{ color: "gray", marginTop: "-17px" }}>
                        {user[1].members} members
                      </p>
                    </div>
                    <div>
                      <button className="joinbtn">Join</button>
                    </div>
                  </div>
                  <div style={{ display: "flex" }} key={user.id}>
                    <img src={user[2].groupIcon} alt={user[0].id} />
                    <div>
                      <p
                        style={{
                          color: "orangered",
                          fontWeight: "600",
                          fontSize: "15px",
                        }}
                      >
                        {user[2].groupName}
                      </p>
                      <p style={{ color: "gray", marginTop: "-17px" }}>
                        {user[2].members} members
                      </p>
                    </div>
                    <div>
                      <button className="joinbtn">Join</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;
