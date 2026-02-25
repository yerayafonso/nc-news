import { Link } from "react-router-dom";

function ArticleCard(props) {
  const articleObj = props.articleObj;

  const articleImg = articleObj.article_img_url;
  const articleId = articleObj.article_id;
  const author = articleObj.author;
  const createdAt = articleObj.created_at;
  const title = articleObj.title;
  const topic = articleObj.topic;

  return (
    <>
      <Link to={`/articles/${articleId}`}>
        <div className="card">
          <img src={articleImg} className="image" />
          <ul className="card-details">
            <li>
              <p>ID: {articleId}</p>
            </li>
            <li>
              <p>Title: {title}</p>
            </li>
            <li>
              <p>Author: {author}</p>
            </li>
            <li>
              <p>Topic: {topic}</p>
            </li>
            <li>
              <p>Posted: {createdAt}</p>
            </li>
          </ul>
        </div>
      </Link>
    </>
  );
}

export default ArticleCard;
