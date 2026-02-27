import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

import { UserContext } from "../context/User";

function ArticleCard(props) {
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
        <div className="article-card ">
          <img src={articleImg} className="image" />

          <h2>{title}</h2>

          <div className="article-card-details">
            <div className="card-details">
              <span>{author}</span>
              <span>{topic}</span>
            </div>
            <div className="card-footer">
              <span> {formatDate(createdAt)}</span>
              <div className="card-comments">
                <img src="../comment.svg" id="comment-pic" />
                {commentCount}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ArticleCard;
