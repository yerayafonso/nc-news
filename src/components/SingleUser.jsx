import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import UserCard from "./UserCard";
import { UserContext } from "../context/User";
import { useContext } from "react";
import SmallUserCard from "./SmallUserCard";

function SingleUser() {
  const { setLoggedInUser } = useContext(UserContext);

  const [singleUser, setSingleUser] = useState([]);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { username } = useParams();

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(
        `https://nc-news-app-5h3i.onrender.com/api/users/${username}`,
      );
      const userJson = await response.json();
      const { user } = userJson;
      setSingleUser(user[0]);
    }
    fetchUser();
  }, [username]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://nc-news-app-5h3i.onrender.com/api/users",
        );
        const userJson = await response.json();
        setUserData(userJson);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const handleClick = () => {
    setLoggedInUser({ username, avatar });
  };

  // console.log("single user", singleUser[0]);

  //   const user_name = singleUser.username;
  const name = singleUser.name;
  const avatar = singleUser.avatar_url;

  if (isLoading === true) {
    return <Loading />;
  }

  return (
    <main className="single-user">
      <div></div>
      <div className="large-user-card" key={username}>
        <div>
          <img src={avatar} className="large-user-image" />

          <div className="large-user-card-details">
            <h3>username: {username}</h3>

            <p>Name: {name}</p>
          </div>
        </div>

        <button onClick={handleClick} className="login-btn">
          Log me in!
        </button>
      </div>
      <div className="small-user-list">
        <h3>Other Users</h3>
        {userData.map((object) => {
          if (object.username !== username)
            return <SmallUserCard userObj={object} key={object.username} />;
        })}
      </div>
    </main>
  );
}

export default SingleUser;
