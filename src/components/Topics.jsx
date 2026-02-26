import { useEffect, useState } from "react";
import Loading from "./Loading";
import TopicCard from "./TopicCard";

function Topics() {
  const [topicData, setTopicData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTopics() {
      try {
        const response = await fetch(
          `https://nc-news-app-5h3i.onrender.com/api/topics`,
        );

        const topicBody = await response.json();
        setTopicData(topicBody);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTopics();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        {topicData.map((object) => {
          return <TopicCard topicObj={object} key={object.slug} />;
        })}
      </div>
    </>
  );
}

export default Topics;
