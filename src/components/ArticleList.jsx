// import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";

function ArticleList(props) {
  let articleData = props.articleData;
  const setArticleData = props.setArticleData;
  useEffect(() => {
    async function fetchArticles() {
      const response = await fetch(
        "https://nc-news-app-5h3i.onrender.com/api/articles",
      );
      const articleJson = await response.json();
      const { articles } = articleJson;
      setArticleData(articles);
      console.log("inside fetch", articleData);
    }
    fetchArticles();
    console.log("articles inside useEffect", articleData);
  }, []);
  console.log("articles outside", articleData);
  return (
    <div>
      {articleData.map((object) => {
        return <ArticleCard articleObj={object} />;
      })}
    </div>
  );
}

export default ArticleList;
