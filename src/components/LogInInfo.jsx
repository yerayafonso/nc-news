import { useContext } from "react";
import { UserContext } from "../context/User";
import { Link } from "react-router-dom";

function LogInInfo() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const handleClick = () => {
    setLoggedInUser({
      username: "Guest",
      avatar: "https://www.svgrepo.com/show/452030/avatar-default.svg",
    });
  };

  console.log("logged in user", loggedInUser);

  return (
    <div id="login-info">
      <img src={loggedInUser.avatar} className="login-img" />

      <div className="details-btns">
        <p>Logged In as: {loggedInUser.username} </p>
        <div className="login-btns">
          <Link to={"/users"}>
            <button className="log-out-btn">Sign In</button>
          </Link>
          <button onClick={handleClick} className="log-out-btn">
            Log out!
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogInInfo;
