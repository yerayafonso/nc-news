import { useContext } from "react";
import { UserContext } from "../context/User";
import { useState } from "react";
import axios from "axios";
import formatDate from "../utils/formatDate";

function CommentCard(props) {
  const { loggedInUser } = useContext(UserContext);
  const [isLikeDisabled, setIsLikeDisabled] = useState(false);
  const [isDisLikeDisabled, setIsDisLikeDisabled] = useState(false);
  const [isClearDisabled, setIsClearDisabled] = useState(true);
  const [voteCount, setVoteCount] = useState(0);

  const commentObj = props.commentObj;

  const author = commentObj.author;
  const body = commentObj.body;
  const createdAt = commentObj.created_at;
  const votes = commentObj.votes;
  const comment_id = commentObj.comment_id;

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

  function increaseVote(comment_id) {
    setVoteCount(1);
    setIsLikeDisabled(true);
    setIsDisLikeDisabled(false);
    setIsClearDisabled(false);
    axios
      .patch(
        `https://nc-news-app-5h3i.onrender.com/api/comments/${comment_id}`,
        { inc_votes: 1 },
      )
      .catch(() => {
        setIsLikeDisabled(false);
        setIsDisLikeDisabled(false);
        return setVoteCount(0);
      });
  }

  function decreaseVote(comment_id) {
    setVoteCount(-1);
    setIsDisLikeDisabled(true);
    setIsLikeDisabled(false);
    setIsClearDisabled(false);

    axios
      .patch(
        `https://nc-news-app-5h3i.onrender.com/api/comments/${comment_id}`,
        { inc_votes: -1 },
      )
      .catch(() => {
        setIsLikeDisabled(false);
        setIsDisLikeDisabled(false);
        return setVoteCount(0);
      });
  }

  function clearVote(comment_id) {
    const num = voteCount === -1 ? 1 : -1;
    setVoteCount(0);
    setIsDisLikeDisabled(false);
    setIsLikeDisabled(false);

    axios.patch(
      `https://nc-news-app-5h3i.onrender.com/api/comments/${comment_id}`,
      { inc_votes: num },
    );
  }

  if (loggedInUser.username === author) {
    return (
      <>
        <div className="card">
          <p className="comment-body">{body}</p>

          <div className="card-details">
            <span>{author}</span>
            <span>{formatDate(createdAt)}</span>
          </div>

          <div className="card-footer">
            <div className="vote-controls">
              <button
                onClick={() => {
                  increaseVote(comment_id);
                }}
                disabled={isLikeDisabled}
              >
                +
              </button>
              <span>{votes + voteCount}</span>
              <button
                onClick={() => {
                  decreaseVote(comment_id);
                }}
                disabled={isDisLikeDisabled}
              >
                -
              </button>
              <button
                onClick={() => {
                  clearVote(comment_id);
                }}
                disabled={isClearDisabled}
              >
                clear
              </button>
            </div>

            <button onClick={handleClick} className="delete-btn">
              delete
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="card">
          <p className="comment-body">{body}</p>

          <div className="card-details">
            <span>{author}</span>
            <span>{formatDate(createdAt)}</span>
          </div>
          <div className="card-footer">
            <div className="vote-controls">
              <button
                onClick={() => {
                  increaseVote(comment_id);
                }}
                disabled={isLikeDisabled}
              >
                +
              </button>
              <span>{votes + voteCount}</span>
              <button
                onClick={() => {
                  decreaseVote(comment_id);
                }}
                disabled={isDisLikeDisabled}
              >
                -
              </button>
              <button
                onClick={() => {
                  clearVote(comment_id);
                }}
                disabled={isClearDisabled}
              >
                clear
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CommentCard;
