import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";
import commentIcon from "../assets/comment.svg";
import upArrow from "../assets/upArrow.svg";
import capitaliseWord from "../utils/capitaliseWord.jsx";

function HomeArticleCard(props) {
  const articleObj = props.articleObj;

  const articleImg = articleObj.article_img_url;
  const articleId = articleObj.article_id;
  const author = articleObj.author;
  const createdAt = articleObj.created_at;
  const title = articleObj.title;
  const topic = articleObj.topic;
  const commentCount = articleObj.comment_count;
  const votes = articleObj.votes;

  return (
    <>
      <Link to={`/articles/${articleId}`}>
        <div className="home-large article-card ">
          <img src={articleImg} className="large-image" />

          <h2>{title}</h2>

          <div className="article-card-details">
            <div className="card-details">
              <span>{author}</span>
              <span>{capitaliseWord(topic)}</span>
              <span>
                <img src={upArrow} id="upArrow" />
                {votes}
              </span>
            </div>
            <div className="card-footer">
              <span> {formatDate(createdAt)}</span>
              <div className="card-comments">
                <img src={commentIcon} id="comment-pic" />
                {commentCount}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default HomeArticleCard;
