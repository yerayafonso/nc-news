import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentCard from "./CommentCard";
import { UserContext } from "../context/User";
import Loading from "./Loading";

function Comments() {
  const [commentsData, setCommentsData] = useState([]);
  const { article_id } = useParams();
  const { loggedInUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      const response = await fetch(
        `https://nc-news-app-5h3i.onrender.com/api/articles/${article_id}/comments`,
      );
      const commentsJson = await response.json();
      const { comments } = commentsJson;
      setCommentsData(comments);
    }
    try {
      fetchComments();
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
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
        </div>
        <div>
          {commentsData.map((object) => {
            return <CommentCard commentObj={object} key={object.comment_id} />;
          })}
        </div>
      </main>
    </>
  );
}

export default Comments;
