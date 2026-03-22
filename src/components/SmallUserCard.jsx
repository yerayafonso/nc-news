import { Link } from "react-router-dom";

function SmallUserCard(props) {
  const userObj = props.userObj;

  const username = userObj.username;
  const name = userObj.name;

  return (
    <>
      <div className="user-card" key={username}>
        <Link to={`/users/${username}`}>
          <div>
            <div className="user-card-details">
              <h3>username: {username}</h3>

              <p>{name}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SmallUserCard;
