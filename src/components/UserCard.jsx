import { Link } from "react-router-dom";

function UserCard(props) {
  const userObj = props.userObj;

  const username = userObj.username;
  const name = userObj.name;
  const avatar = userObj.avatar_url;

  return (
    <>
      <Link to={`/users/${username}`}>
        <div className="user-card" key={username}>
          <img src={avatar} className="user-img" />
          <ul className="user-card-details">
            <li>
              <p>username: {username}</p>
            </li>
            <li>
              <p>Name: {name}</p>
            </li>
          </ul>
        </div>
      </Link>
    </>
  );
}

export default UserCard;
