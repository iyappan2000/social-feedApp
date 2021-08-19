import "./Post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import Button from "@material-ui/core/Button";
import FaceIcon from "@material-ui/icons/Face";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const commentHandler = (e, name) => {
    setComment(e.target.value);
  };
  const submitHanlder = (e) => {
    e.preventDefault();
    addHandler(comment);
    setComment("");
  };
  const addHandler = (uName) => {
    setComments((prevComments) => {
      return [...prevComments, { comment: uName }];
    });
  };
  const data = comments;
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpAltIcon
              style={{ color: isLiked ? "blue" : "black" }}
              className="likeIcon"
              onClick={likeHandler}
            />
            {/* <img
              className="likeIcon"
              src="assets/heart.png"
              onClick={likeHandler}
              alt=""
            /> */}
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
        <div
          // style={{ marginTop: "20px", textAlign: "left" }}
          className="comments"
        >
          <ul>
            <div>comments:</div>
            {data.map((user) => {
              return (
                <li>
                  <FaceIcon
                    style={{
                      fontSize: "16px",
                      marginTop: "10px",
                      paddingRight: "10px",
                      paddingTop: "5px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                  {user.comment}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="share" style={{ marginTop: "20px" }}>
          <div className="shareWrapper">
            <div className="shareTop">
              <img
                className="shareProfileImg"
                src="/assets/person/1.jpeg"
                alt=""
              />

              <input
                placeholder="What's in your mind Safak?"
                className="shareInput"
                value={comment}
                onChange={commentHandler}
              />
              <Button
                onClick={submitHanlder}
                style={{ background: "transparent" }}
              >
                <SendIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
