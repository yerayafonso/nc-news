import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import PageError from "./Error";

function SingleArticle() {
  const [singleArticle, setSingleArticle] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
        if (!response.ok) {
          throw new Error();
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
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
  console.log("votes", votes);

  const [voteCount, setVoteCount] = useState(0);

  console.log("vote state", voteCount);

  function increaseVote(article_id) {
    setVoteCount((currentVoteCount) => {
      return currentVoteCount + 1;
    });
    axios
      .patch(
        `https://nc-news-app-5h3i.onrender.com/api/articles/${article_id}`,
        { inc_votes: 1 },
      )
      .catch(() => {
        return setVoteCount((currentVoteCount) => {
          return currentVoteCount - 1;
        });
      });
  }

  function decreaseVote(article_id) {
    setVoteCount((currentVoteCount) => {
      return currentVoteCount - 1;
    });
    axios
      .patch(
        `https://nc-news-app-5h3i.onrender.com/api/articles/${article_id}`,
        { inc_votes: -1 },
      )
      .catch(() => {
        return setVoteCount((currentVoteCount) => {
          return currentVoteCount + 1;
        });
      });
  }

  // useEffect(() => {
  //   async function updateVote() {
  //     const response = await fetch(
  //       `https://nc-news-app-5h3i.onrender.com/api/articles/${article_id}`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           changeVote: voteCount,
  //         }),
  //       },
  //     );
  //     const results = await response.json();
  //     votes = results.votes;
  //   }
  //   updateVote();
  // }, [voteCount]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <PageError />;
  }

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
          <div className="card">
            <img src={articleImg} className="image" />
            <ul className="card-details">
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
                <p>Votes: {votes + voteCount}</p>
                <button
                  onClick={() => {
                    increaseVote(article_id);
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    decreaseVote(article_id);
                  }}
                >
                  -
                </button>
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
