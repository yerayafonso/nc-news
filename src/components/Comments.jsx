import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentCard from "./CommentCard";
import { UserContext } from "../context/User";
import Loading from "./Loading";

function Comments() {
  const [commentsData, setCommentsData] = useState([]);
  const { article_id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(
          `https://nc-news-app-5h3i.onrender.com/api/articles/${article_id}/comments`,
        );
        const commentsJson = await response.json();
        const { comments } = commentsJson;
        setCommentsData(comments);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchComments();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {" "}
      <main>
        <div className="back-post-btn">
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
