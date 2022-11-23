import "./menu.styles.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className='menu'>
      {/* <div className="navigation-button">
    <span className="navigation-icon">&nbsp;</span>
  </div> */}

      <input type='checkbox' className='menu-checkbox' id='menu-toggle' />

      <label htmlFor='menu-toggle' className='navigation-button'>
        <span className='navigation-icon'>&nbsp;</span>
      </label>

      <div className='menu-background'>
        <ul className='menu-list'>
          <li className='menu-item'>
            <Link to='/psykologisk-behandling' className='menu-link'>
              <span>01</span> Behandling
            </Link>
          </li>
          <li className='menu-item'>
            <Link to='/psykologisk-veiledning' className='menu-link'>
              <span>02</span> Veiledning
            </Link>
          </li>
          <li className='menu-item'>
            <Link to='/istdp' className='menu-link'>
              <span>03</span> ISTDP
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
