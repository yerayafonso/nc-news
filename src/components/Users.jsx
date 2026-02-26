import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import Loading from "./Loading";

function Users() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
  console.log(userData);

  if (isLoading === true) {
    return <Loading />;
  }

  return (
    <div className="user-list">
      {userData.map((object) => {
        return <UserCard userObj={object} key={object.username} />;
      })}
    </div>
  );
}

export default Users;
