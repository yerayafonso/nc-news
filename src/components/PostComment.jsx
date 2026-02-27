import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../context/User";

import { useState } from "react";
import CommentStatus from "./CommentStatus";

function PostComment() {
  const { article_id } = useParams();
  const { loggedInUser } = useContext(UserContext);
  const [submitComment, setSubmitComment] = useState("");

  const formEndpoint = `https://nc-news-app-5h3i.onrender.com/api/articles/${article_id}/comments`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = e.target.body.value;
    console.log("formdata", formData);
    const inputData = { username: loggedInUser.username, body: formData };
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      // const postData = await response.json();

      if (response.ok) {
        setSubmitComment("success");
      } else {
        setSubmitComment("error");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Link to={`/articles/${article_id}/comments`}>
        <button>Back</button>
      </Link>
      <div className="comment-form-container">
        <p className="logged-in-user">Username: {loggedInUser.username}</p>
        <form action={formEndpoint} method="post" onSubmit={handleSubmit}>
          <label htmlFor="comment-text">Body:</label>
          <textarea id="comment-text" name="body" type="text" required />
          <input type="submit" value="post" className="submit-btn" />
        </form>
        <CommentStatus submitComment={submitComment} />
      </div>
    </>
  );
}

export default PostComment;
