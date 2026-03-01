import { useEffect, useState } from "react";
import HomeArticleCard from "./HomeArticleCard";
import Loading from "./Loading";
import SmallHomeArticleCard from "./SmallHomeArticleCard";
import { Link } from "react-router-dom";

function Home() {
  const [articleData, setArticleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(isLoading);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch(
          `https://nc-news-app-5h3i.onrender.com/api/articles`,
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
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="home">
      <span className="welcome">
        <h1>Welcome to Almost News!!</h1>
        <p>Reporting almost news since... yesterday</p>
      </span>

      <Link to={"/users"}>
        <button>Sign In</button>
      </Link>

      <h2>Latest</h2>
      <div className="article-container">
        <div className="home-large-article">
          <HomeArticleCard
            articleObj={articleData[0]}
            key={articleData[0].article_id}
          />
        </div>
      </div>
      {/* <Link to={"/topics"}>
        <h2>Topics</h2>
      </Link> */}
    </main>
  );
}

export default Home;
