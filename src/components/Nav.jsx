import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li className="nav-li">
          <Link to="/" className="nav-btn">
            <span>Home</span>
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/articles" className="nav-btn">
            <span> Articles</span>
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/users" className="nav-btn">
            <span>Users</span>
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/topics" className="nav-btn">
            <span>Topics</span>
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/contact" className="nav-btn">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
