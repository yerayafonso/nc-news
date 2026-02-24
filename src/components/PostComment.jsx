import { useParams } from "react-router-dom";

function PostComment() {
  const { article_id } = useParams();

  return (
    <>
      <form action={`/articles/${article_id}/comments`} method="post">
        <label htmlFor="topic-dropdown">topic:</label>
        <select id="topic-dropdown">
          <option>coding</option>
          <option>football</option>
          <option>cooking</option>
        </select>
        <label htmlFor="comment-text">Body:</label>
        <textarea id="comment-text" type="text"></textarea>
        <button type="submit">post</button>
      </form>
    </>
  );
}

export default PostComment;
