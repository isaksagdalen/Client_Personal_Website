import "./footer.styles.css";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-logo-box margin-bottom-big'>
        <img
          src={require("../../assets/original.png")}
          alt='psykolog-trondheim-logo'
          className='footer-logo'
        />
      </div>
      <div className='container grid grid--2-cols'>
        <div className='company-name'>
          <div className='company-name-text'>
            &copy;Skjelbred Psykologi Consulting
          </div>
           <a href="https://exotechweb.com" className='company-name-text'>
            Made by Exotechweb
          </a>
        </div>
        <div className='contacts'>
          <p className='phone-number'>Telefon: 950 54 723</p>
          <p className='e-mail'>E-post: skjelbredanna@gmail.com</p>
          <p className='adresse'>Adresse: Nordre gt. 21 , 7011 Trondheim</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
