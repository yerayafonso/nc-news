import { Link } from "react-router-dom";

function TopicCard(props) {
  const topicObj = props.topicObj;

  console.log(topicObj);

  return (
    <>
      <Link to={`/topics/${topicObj.slug}`}>
        <div>
          <ul className="card-details">
            <li>Topic: {topicObj.slug}</li>
            <li>Description: {topicObj.description}</li>
          </ul>
        </div>
      </Link>
    </>
  );
}
export default TopicCard;
