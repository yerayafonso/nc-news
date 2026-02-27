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
      <img src={loggedInUser.avatar} className="login-img" />
      <p>Logged In as: {loggedInUser.username} </p>

      <button onClick={handleClick} className="log-out-btn">
        Log out!
      </button>
    </div>
  );
}

export default LogInInfo;
