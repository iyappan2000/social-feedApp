import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";
import { Posts } from "../../dummyData";

export default function Feed({ search }) {
  const data = Posts;
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {data.map((p) => {
          return (
            <div>
              <Post key={p.id} post={p} search={search} />
              {/* {p[1].id} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
