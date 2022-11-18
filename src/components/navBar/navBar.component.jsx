import "./navBar.styles.css";
import NavBarItem from "../navBarItem/navBarItem.component";

function navLinkPressHandler(e) {
  const { target } = e;
}

function NavBar({ navBarItems }) {
  return (
    <navigation className='nav'>
      <div className='logo-box'>
        <img
          src={require("../../assets/original.png")}
          alt='logo'
          className='logo'
        />
      </div>
      <ul className='nav-list'>
        {navBarItems.map(({ title, link }) => (
          <NavBarItem title={title} link={link} />
        ))}
        <a href='#' className='btn'>
          Bestill time
        </a>
      </ul>
    </navigation>
  );
}

export default NavBar;
