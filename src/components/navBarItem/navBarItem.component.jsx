import "./navBarItem.styles.css";

function NavBarItem({ title, link }) {
  return (
    <li className='nav-items'>
      <a href={link} className='nav-links'>
        {title}
      </a>
    </li>
  );
}

export default NavBarItem;
