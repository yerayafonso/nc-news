import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios, { HttpStatusCode } from "axios";
import Loading from "./Loading";
import PageError from "./Error";
import formatDate from "../utils/formatDate";

function SingleArticle() {
  const [singleArticle, setSingleArticle] = useState("");
  const [errorCheck, setErrorCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLikeDisabled, setIsLikeDisabled] = useState(false);
  const [isDisLikeDisabled, setIsDisLikeDisabled] = useState(false);
  const [isClearDisabled, setIsClearDisabled] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function fetchArticles() {
      try {
        const response = await fetch(
          `https://nc-news-app-5h3i.onrender.com/api/articles/${article_id}`,
        );
        const articleJson = await response.json();
        const { article } = articleJson;
        setSingleArticle(article);
        console.log("res.ok", response.ok);
        console.log("error", errorCheck);
        if (response.ok === false) {
          // console.log("inside if");
          // setErrorCheck(true);
          throw new Error("there is an error");
        }
      } catch {
        console.log("error inside catch");
        setErrorCheck(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchArticles();
  }, []);

  console.log(errorCheck);

  const articleImg = singleArticle.article_img_url;

  const author = singleArticle.author;
  const createdAt = singleArticle.created_at;
  const title = singleArticle.title;
  const topic = singleArticle.topic;
  const body = singleArticle.body;
  const votes = singleArticle.votes;
  const commentCount = singleArticle.comment_count;

  const [voteCount, setVoteCount] = useState(0);

  function increaseVote(article_id) {
    setVoteCount(1);
    setIsLikeDisabled(true);
    setIsDisLikeDisabled(false);
    setIsClearDisabled(false);
    axios
      .patch(
        `https://nc-news-app-5h3i.onrender.com/api/articles/${article_id}`,
        { inc_votes: 1 },
      )
      .catch(() => {
        setIsLikeDisabled(false);
        setIsDisLikeDisabled(false);
        return setVoteCount(0);
      });
  }

  function decreaseVote(article_id) {
    setVoteCount(-1);
    setIsDisLikeDisabled(true);
    setIsLikeDisabled(false);
    setIsClearDisabled(false);

    axios
      .patch(
        `https://nc-news-app-5h3i.onrender.com/api/articles/${article_id}`,
        { inc_votes: -1 },
      )
      .catch(() => {
        setIsLikeDisabled(false);
        setIsDisLikeDisabled(false);
        return setVoteCount(0);
      });
  }

  function clearVote(article_id) {
    const num = voteCount === -1 ? 1 : -1;
    setVoteCount(0);
    setIsDisLikeDisabled(false);
    setIsLikeDisabled(false);

    axios.patch(
      `https://nc-news-app-5h3i.onrender.com/api/articles/${article_id}`,
      { inc_votes: num },
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  if (errorCheck) {
    console.log(errorCheck);
    return <PageError />;
  }

  return (
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
        <div className="single-article-card">
          <p>Topic: {topic}</p>
          <h2>{title}</h2>

          <img src={articleImg} className="single-article-img" />

          <p>Written By: {author}</p>
          <p>{formatDate(createdAt)}</p>

          <p>Votes: {votes + voteCount}</p>
          <button
            onClick={() => {
              increaseVote(article_id);
            }}
            disabled={isLikeDisabled}
          >
            +
          </button>
          <button
            onClick={() => {
              decreaseVote(article_id);
            }}
            disabled={isDisLikeDisabled}
          >
            -
          </button>
          <button
            onClick={() => {
              clearVote(article_id);
            }}
            disabled={isClearDisabled}
          >
            clear
          </button>

          <p>No. of Comments: {commentCount}</p>

          <p>{body}</p>
        </div>
      </div>
    </main>
  );
}

export default SingleArticle;
