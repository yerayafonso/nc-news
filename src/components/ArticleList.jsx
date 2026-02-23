// import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { useState } from "react";

function ArticleList() {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await fetch(
        "https://nc-news-app-5h3i.onrender.com/api/articles",
      );
      const articleJson = await response.json();
      const { articles } = articleJson;
      setArticleData(articles);
    }
    fetchArticles();
  }, []);

  return (
    <div>
      {articleData.map((object) => {
        return <ArticleCard articleObj={object} />;
      })}
    </div>
  );
}

export default ArticleList;
