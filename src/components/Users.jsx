import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import Loading from "./Loading";

function Users() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://nc-news-app-5h3i.onrender.com/api/users",
      );
      const userJson = await response.json();
      setUserData(userJson);
    }
    try {
      fetchUsers();
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
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
