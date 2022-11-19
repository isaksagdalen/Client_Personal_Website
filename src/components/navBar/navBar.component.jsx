import "./navBar.styles.css";
import NavBarItem from "../navBarItem/navBarItem.component";

function navLinkPressHandler(e) {
  const data = e.target.getAttribute("data");

  const selectedElement = document.getElementById(data.toString());

  selectedElement.scrollIntoView({ behavior: "smooth" });
}

function NavBar({ navBarItems }) {
  return (
    <div className="nav">
      <div className="logo-box">
        <img
          src={require("../../assets/original.png")}
          alt="logo"
          className="logo"
        />
      </div>
      <ul className="nav-list margin-right-big">
        {navBarItems.map(({ title, link, index }) => (
          <NavBarItem
            onClick={navLinkPressHandler}
            title={title}
            link={link}
            key={title}
            index={index}
          />
        ))}
        <a href="#" className="btn">
          Bestill time
        </a>
      </ul>
    </div>
  );
}

export default NavBar;
