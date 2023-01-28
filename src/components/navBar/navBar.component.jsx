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
    <div className='nav'>
      <div className='nav-items-box'>
        <Link to='/' className='logo-box'>
          <img
            className='logo'
            src={require("../../assets/original.png")}
            alt='psykolog-trondheim-logo'
          />
        </Link>
        <ul className='nav-list '>
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
            <Link to='/bestill' className='btn'>
              Bestill time
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
