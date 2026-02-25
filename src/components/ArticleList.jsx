// import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { useState } from "react";
import Loading from "./Loading";

function ArticleList() {
  const [articleData, setArticleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(isLoading);

  useEffect(() => {
    async function fetchArticles() {
      const response = await fetch(
        "https://nc-news-app-5h3i.onrender.com/api/articles",
      );
      const articleJson = await response.json();
      const { articles } = articleJson;
      setArticleData(articles);
    }
    try {
      fetchArticles();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading === true) {
    return <Loading />;
  }
  console.log(isLoading);
  return (
    <div>
      {articleData.map((object) => {
        return <ArticleCard articleObj={object} key={object.article_id} />;
      })}
    </div>
  );
}

export default ArticleList;
