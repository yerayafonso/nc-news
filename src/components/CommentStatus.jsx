function CommentStatus(props) {
  const submitComment = props.submitComment;

  if (submitComment === "success") {
    return <p className="status-msg success">Comment posted</p>;
  } else if (submitComment === "error") {
    return (
      <p className="status-msg fail">Comment failed to post, invalid user</p>
    );
  } else {
    return <p></p>;
  }
}

export default CommentStatus;
