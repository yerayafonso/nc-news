import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentCard from "./CommentCard";
import { UserContext } from "../context/User";

function Comments() {
  const [commentsData, setCommentsData] = useState([]);
  const { article_id } = useParams();
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    async function fetchArticles() {
      const response = await fetch(
        `https://nc-news-app-5h3i.onrender.com/api/articles/${article_id}/comments`,
      );
      const commentsJson = await response.json();
      const { comments } = commentsJson;
      setCommentsData(comments);
    }
    fetchArticles();
  }, []);

  // const handleClick = () => {};

  function myFunction() {
    const popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  return (
    <>
      {" "}
      <main>
        <div>
          <Link to={`/articles/${article_id}`}>
            <button>Back</button>
          </Link>
          <Link to={`/articles/${article_id}/comments/post`}>
            <button>Post</button>
          </Link>
          {/* <Link
            to={`/articles/${article_id}/comments/post`}
            onClick={(e) => {
              if (loggedInUser.username === "Not Loggged In") {
                e.preventDefault();
                myFunction();
              }
            }}
          >
            <div class="popup">
              Click me!
              <span class="popuptext" id="myPopup">
                Please Log in
              </span>
              {<button onClick={handleClick}>Post</button> *
          </Link> */}
        </div>
        <div>
          {commentsData.map((object) => {
            return <CommentCard commentObj={object} />;
          })}
        </div>
      </main>
    </>
  );
}

export default Comments;
