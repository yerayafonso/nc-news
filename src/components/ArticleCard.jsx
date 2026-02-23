import { Link } from "react-router-dom";

function ArticleCard(props) {
  const articleObj = props.articleObj;

  console.log("object", articleObj);
  const articleImg = articleObj.article_img_url;
  const articleId = articleObj.article_id;
  const author = articleObj.author;
  const createdAt = articleObj.created_at;
  const title = articleObj.title;
  const topic = articleObj.topic;

  return (
    <div className="article-card">
      <Link to={`/articles/${articleId}`}>
        <img src={articleImg} />
        <ul className="article-card-details">
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
      </Link>
    </div>
  );
}

export default ArticleCard;
