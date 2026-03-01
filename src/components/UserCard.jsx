import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User";

function UserCard(props) {
  const { setLoggedInUser } = useContext(UserContext);
  const userObj = props.userObj;

  const username = userObj.username;
  const name = userObj.name;
  const avatar = userObj.avatar_url;

  const handleClick = () => {
    setLoggedInUser({ username, avatar });
  };

  return (
    <>
      <div className="user-card" key={username}>
        <Link to={`/users/${username}`}>
          <div>
            <img src={avatar} className="user-image" />

            <div className="user-card-details">
              <h3>username: {username}</h3>

              <p>{name}</p>
            </div>
          </div>
        </Link>
        <button onClick={handleClick} className="login-btn">
          Log me in!
        </button>
      </div>
    </>
  );
}

export default UserCard;
