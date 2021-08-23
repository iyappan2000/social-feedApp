import React, { useEffect, useState } from "react";

function People() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    asyncTrendsFetch();
  }, []);

  async function asyncTrendsFetch() {
    const res = await fetch("https://randomuser.me/api/");
    const receivedData = await res.json();
    setData([receivedData]);
  }
  console.log(datas);
  return (
    <div className="trendsBox">
      <div className="trendsBoxHead">
        <div className="topHead">
          <p style={{ marginLeft: "15px", fontWeight: "600" }}>
            People Near You
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

export default People;
