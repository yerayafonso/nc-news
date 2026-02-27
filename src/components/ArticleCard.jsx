import { useContext } from "react";
import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

import { UserContext } from "../context/User";

function ArticleCard(props) {
  const { loggedInUser } = useContext(UserContext);
  const articleObj = props.articleObj;

  const articleImg = articleObj.article_img_url;
  const articleId = articleObj.article_id;
  const author = articleObj.author;
  const createdAt = articleObj.created_at;
  const title = articleObj.title;
  const topic = articleObj.topic;
  const commentCount = articleObj.comment_count;

  console.log(createdAt);
  return (
    <>
      <Link to={`/articles/${articleId}`}>
        <div className="article-card card">
          <img src={articleImg} className="image" />

          <h2>{title}</h2>

          <p>Topic: {topic}</p>

          <p>No. of Comments: {commentCount}</p>
          <div className="card-header-details">
            <p>Author: {author}</p>
            <p>{formatDate(createdAt)}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ArticleCard;
