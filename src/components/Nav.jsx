import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li className="nav-li">
          <Link to="/">
            <button className="nav-btn">Home</button>
          </Link>
        </li>
        <li>
          <Link to="/articles">
            <button className="nav-btn">Articles</button>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <button className="nav-btn">Users</button>
          </Link>
        </li>
        <li>
          <Link to="/topics">
            <button className="nav-btn">Topics</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
