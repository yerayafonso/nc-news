import { useContext } from "react";
import { UserContext } from "../context/User";

function LogInInfo() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const handleClick = () => {
    setLoggedInUser({
      username: "Not Logged In",
      avatar_url: "/home/yerayafonso/Northcoders/frontend/nc-news/image.png",
    });
  };

  return (
    <div id="login-info">
      <p>Logged In as: {loggedInUser.username} </p>
      <img src={loggedInUser.avatar} className="login-img" />
      <button onClick={handleClick}>Log out!</button>
    </div>
  );
}

export default LogInInfo;
