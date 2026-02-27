import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
// import ArticleList from "./ArticleList";
import ArticleCard from "./ArticleCard";
import PageError from "./Error";

function ArticlesByTopic() {
  const [isLoading, setIsLoading] = useState(true);
  const [topicArticles, setTopicArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");
  const [error, setError] = useState(null);

  const { topic } = useParams();

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    async function fetchArticles() {
      setError(null);
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://nc-news-app-5h3i.onrender.com/api/articles?topic=${topic}&sort_by=${sortBy}&order=${order}`,
        );
        const articleJson = await response.json();

        if (!response.ok) {
          throw new Error();
        }
        setTopicArticles(articleJson.articles);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchArticles();
  }, [sortBy, order]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <PageError />;
  }
  console.log(topicArticles);
  return (
    <main>
      <div className="dropdown">
        <label htmlFor="sortByQuery"> Sort By:</label>
        <select
          name="sortByQuery"
          onChange={handleSortChange}
          defaultValue="created_at"
        >
          <option value="author"> Author</option>
          <option value="title"> Title</option>

          <option value="topic">Topic</option>
          <option value="created_at"> Time Posted</option>
          <option value="votes"> Votes</option>
          <option value="comment_count"> Comments</option>
        </select>
        <label htmlFor="orderByQuery"> Order:</label>
        <select
          name="orderByQuery"
          onChange={handleOrderChange}
          defaultValue="DESC"
        >
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>
      <div className="article-container">
        {topicArticles.map((object) => {
          return <ArticleCard articleObj={object} />;
        })}
      </div>
    </main>
  );
}

export default ArticlesByTopic;
