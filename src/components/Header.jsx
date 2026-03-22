import LogInInfo from "./LogInInfo";
import Nav from "./Nav";
import logoWhite from "/home/yerayafonso/Northcoders/frontend/nc-news/src/assets/logo-white.svg";

function Header() {
  return (
    <header>
      <div className="title-login">
        <div></div>
        <img src={logoWhite} />
        <p className="tagline">Reporting Almost News since... yesterday</p>
        {/* <h1>NC - News</h1> */}
        <LogInInfo />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
