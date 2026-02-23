import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentCard from "./CommentCard";

function Comments() {
  const [commentsData, setCommentsData] = useState([]);
  const { article_id } = useParams();

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
  console.log("comments", commentsData);

  return (
    <>
      {" "}
      <main>
        <div>
          <Link to={`/articles/${article_id}`}>
            <button>Back</button>
          </Link>
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
