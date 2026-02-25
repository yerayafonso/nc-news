import { useState, useEffect } from "react";
import UserCard from "./UserCard";

function Users() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://nc-news-app-5h3i.onrender.com/api/users",
      );
      const userJson = await response.json();
      setUserData(userJson);
    }
    fetchUsers();
  }, []);
  console.log(userData);
  return (
    <div className="user-list">
      {userData.map((object) => {
        return <UserCard userObj={object} key={object.username} />;
      })}
    </div>
  );
}

export default Users;
