import "./menu.styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="menu">
      {/* <div className="navigation-button">
    <span className="navigation-icon">&nbsp;</span>
  </div> */}

      <label
        onClick={toggleMenu}
        htmlFor="menu-toggle"
        className={`navigation-button ${menuOpen && "menu-button-open"}`}
      >
        <span className={`navigation-icon ${menuOpen && "nav-icon-open"}`}>
          &nbsp;
        </span>
      </label>

      <div className={`menu-background ${!menuOpen && "menu-display-closed"}`}>
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/psykologisk-behandling" className="menu-link">
              <span>01</span> Behandling
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/psykologisk-veiledning" className="menu-link">
              <span>02</span> Veiledning
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/istdp" className="menu-link">
              <span>03</span> ISTDP
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
