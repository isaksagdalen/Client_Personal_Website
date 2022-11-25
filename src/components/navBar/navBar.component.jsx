import "./navBar.styles.css";
import NavBarItem from "../navBarItem/navBarItem.component";
import { Link } from "react-router-dom";

function navLinkPressHandler(e) {
  const data = e.target.getAttribute("data");

  const selectedElement = document.getElementById(data.toString());

  selectedElement.scrollIntoView({ behavior: "smooth" });
}

function NavBar({ navBarItems, bestill }) {
  return (
    <div className="nav">
      <Link to="/" onClick={console.log("Logo")} className="logo-box">
        <img
          src={require("../../assets/original.png")}
          alt="logo"
          className="logo"
        />
      </Link>
      <ul className="nav-list margin-right-big">
        {navBarItems?.map(({ title, link, index }) => (
          <NavBarItem
            onClick={navLinkPressHandler}
            title={title}
            link={link}
            key={title}
            index={index}
          />
        ))}
        {!bestill && (
          <Link to="/bestill" className="btn">
            Bestill time
          </Link>
        )}
      </ul>
    </div>
  );
}

export default NavBar;
