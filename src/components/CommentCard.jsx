function CommentCard(props) {
  const commentObj = props.commentObj;

  const author = commentObj.author;
  const body = commentObj.body;
  const createdAt = commentObj.created_at;
  const votes = commentObj.votes;

  return (
    <>
      <div className="comment-card">
        <ul className="comment-card-details">
          <li>
            <p>Body: {body}</p>
          </li>
          <li>
            <p>Author: {author}</p>
          </li>
          <li>
            <p>Votes: {votes}</p>
          </li>
          <li>
            <p>Posted: {createdAt}</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CommentCard;
