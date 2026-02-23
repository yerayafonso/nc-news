import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function SingleArticle() {
  const [singleArticle, setSingleArticle] = useState("");

  const { article_id } = useParams();

  useEffect(() => {
    async function fetchArticles() {
      const response = await fetch(
        `https://nc-news-app-5h3i.onrender.com/api/articles/${article_id}`,
      );
      const articleJson = await response.json();
      const { article } = articleJson;
      setSingleArticle(article);
    }
    fetchArticles();
  }, []);

  const articleImg = singleArticle.article_img_url;

  const author = singleArticle.author;
  const createdAt = singleArticle.created_at;
  const title = singleArticle.title;
  const topic = singleArticle.topic;
  const body = singleArticle.body;
  const votes = singleArticle.votes;
  const commentCount = singleArticle.comment_count;

  return (
    <>
      <main>
        <div>
          <Link to={"/articles"}>
            <button>Back</button>
          </Link>
          <Link to={`/articles/${article_id}/comments`}>
            <button>Comments</button>
          </Link>
        </div>
        <div>
          <div className="article-card">
            <img src={articleImg} className="article-img" />
            <ul className="article-card-details">
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
                <p>Votes: {votes}</p>
              </li>
              <li>
                <p>No. of Comments: {commentCount}</p>
              </li>
              <li>
                <p>Posted: {createdAt}</p>
              </li>
              <li>
                <p>Body: {body}</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default SingleArticle;
