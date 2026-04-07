import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

function CommentStatus(props) {
  const submitComment = props.submitComment;
  const { article_id } = useParams();
  let navigate = useNavigate();

  if (submitComment === "success") {
    // return <p className="status-msg success">Comment posted</p>;
    navigate(`/articles/${article_id}/comments`);
  } else if (submitComment === "error") {
    return (
      <p className="status-msg fail">Comment failed to post, invalid user</p>
    );
  } else {
    return <p></p>;
  }
}

export default CommentStatus;
