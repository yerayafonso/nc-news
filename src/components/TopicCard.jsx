import { Link } from "react-router-dom";
import capitaliseWord from "../utils/capitaliseWord";

function TopicCard(props) {
  const topicObj = props.topicObj;

  console.log(topicObj);

  return (
    <>
      <Link to={`/topics/${topicObj.slug}`}>
        <div className="topic-card-details">
          <h2>{capitaliseWord(topicObj.slug)}</h2>
          <div className="topic-desc">
            <p>{topicObj.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
export default TopicCard;
