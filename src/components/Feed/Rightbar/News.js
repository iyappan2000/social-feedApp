import React, { useEffect, useState } from "react";

function News() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    asyncTrendsFetch();
  }, []);

  async function asyncTrendsFetch() {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a0debf4427bb4153a610825c72dd1a98"
    );
    const receivedData = await res.json();
    setData([receivedData]);
  }
  return (
    <div className="trendsBox">
      <div className="trendsBoxHead">
        <div className="topHead">
          <p style={{ marginLeft: "15px", fontWeight: "600" }}>News</p>
          <div className="topRight">
            <p>view All</p>
          </div>
        </div>
        <hr />
        <div>
          {" "}
          <div className="trendsTags">
            <ul>
              {datas.map((user) => {
                return (
                  <div>
                    <li key={user.id}>
                      {user.articles[0].title}
                      <p
                        style={{
                          color: "gray",
                          marginTop: "2px",
                          fontSize: "14px",
                        }}
                      >
                        {user.articles[0].publishedAt}
                      </p>
                    </li>

                    <li key={user.id}>
                      {user.articles[1].title}
                      <p
                        style={{
                          color: "gray",
                          marginTop: "2px",
                          fontSize: "14px",
                        }}
                      >
                        {user.articles[1].publishedAt}
                      </p>
                    </li>
                    <li key={user.id}>
                      {user.articles[2].title}
                      <p
                        style={{
                          color: "gray",
                          marginTop: "2px",
                          fontSize: "14px",
                        }}
                      >
                        {user.articles[2].publishedAt}
                      </p>
                    </li>
                    <li key={user.id}>
                      {user.articles[3].title}
                      <p
                        style={{
                          color: "gray",
                          marginTop: "2px",
                          fontSize: "14px",
                        }}
                      >
                        {user.articles[3].publishedAt}
                      </p>
                    </li>
                    <li key={user.id}>
                      {user.articles[4].title}
                      <p
                        style={{
                          color: "gray",
                          marginTop: "2px",
                          fontSize: "14px",
                        }}
                      >
                        {user.articles[4].publishedAt}
                      </p>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
