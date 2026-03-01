import { useContext } from "react";
import { UserContext } from "../context/User";

function LogInInfo() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const handleClick = () => {
    setLoggedInUser({
      username: "Guest",
      avatar_url: "https://www.svgrepo.com/show/452030/avatar-default.svg",
    });
  };

  console.log("logged in user", loggedInUser);

  return (
    <div id="login-info">
      <img src={loggedInUser.avatar_url} className="login-img" />
      <p>Logged In as: {loggedInUser.username} </p>

      <button onClick={handleClick} className="log-out-btn">
        Log out!
      </button>
    </div>
  );
}

export default LogInInfo;
