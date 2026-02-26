// import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { useState } from "react";
import Loading from "./Loading";

function ArticleList() {
  const [articleData, setArticleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  console.log(isLoading);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch(
          `https://nc-news-app-5h3i.onrender.com/api/articles?sort_by=${sortBy}&order=${order}`,
        );
        const articleJson = await response.json();
        const { articles } = articleJson;
        setArticleData(articles);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchArticles();
  }, [sortBy, order]);

  if (isLoading === true) {
    return <Loading />;
  }
  console.log(isLoading);
  return (
    <div>
      <div>
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

        <select
          name="orderByQuery"
          onChange={handleOrderChange}
          defaultValue="DESC"
        >
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>
      {articleData.map((object) => {
        return <ArticleCard articleObj={object} key={object.article_id} />;
      })}
    </div>
  );
}

export default ArticleList;
