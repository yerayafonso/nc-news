import { useContext } from "react";
import { UserContext } from "../context/User";

function CommentCard(props) {
  const { loggedInUser } = useContext(UserContext);
  const commentObj = props.commentObj;

  const author = commentObj.author;
  const body = commentObj.body;
  const createdAt = commentObj.created_at;
  const votes = commentObj.votes;

  const handleClick = () => {
    if (loggedInUser.username === author) {
      fetch(
        `https://nc-news-app-5h3i.onrender.com/api/comments/${commentObj.comment_id}`,
        { method: "DELETE" },
      ).then((res) => {
        if (res.ok) {
          window.location.reload();
        }
      });
    } else {
      console.log("you cannot delete this comment");
    }
  };

  if (loggedInUser.username === author) {
    return (
      <>
        <div className="card">
          <ul className="card-details">
            <li>
              <p>Body: {body}</p>
            </li>
            <li>
              <p>Author: {author}</p>
            </li>
            <li>
              <p>Votes: {votes}</p>
            </li>
            <li>
              <p>Posted: {createdAt}</p>
            </li>
          </ul>
          <button onClick={handleClick}>delete</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="card">
          <ul className="card-details">
            <li>
              <p>Body: {body}</p>
            </li>
            <li>
              <p>Author: {author}</p>
            </li>
            <li>
              <p>Votes: {votes}</p>
            </li>
            <li>
              <p>Posted: {createdAt}</p>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default CommentCard;
