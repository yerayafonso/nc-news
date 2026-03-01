import LogInInfo from "./LogInInfo";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <div className="title-login">
        <div></div>
        <img src="../../logo-white.svg" />
        {/* <h1>NC - News</h1> */}
        <LogInInfo />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
