import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SingleUser() {
  const [singleUser, setSingleUser] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(
        `https://nc-news-app-5h3i.onrender.com/api/users/${username}`,
      );
      const userJson = await response.json();
      const { user } = userJson;
      setSingleUser(user);
    }
    fetchUser();
  }, []);

  //   const user_name = singleUser.username;
  const name = singleUser.name;
  const avatar = singleUser.avatar_url;

  return (
    <div className="user-card">
      <img src={avatar} className="user-img" />
      <ul className="user-card-details">
        <li>
          <p>Username: {username}</p>
        </li>
        <li>
          <p>Name: {name}</p>
        </li>
      </ul>
    </div>
  );
}

export default SingleUser;
