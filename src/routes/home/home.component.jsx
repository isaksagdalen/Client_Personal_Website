import "./home.styles.css";
import { Fragment } from "react";
import NavBar from "../../components/navBar/navBar.component";

const HOME_NAV_BAR_ITEMS = [
  { title: "Om meg", link: "#", index: 1 },
  { title: "Priser", link: "#", index: 2 },
];

function Home() {
  return (
    <Fragment>
      <header className='header'>
        <NavBar navBarItems={HOME_NAV_BAR_ITEMS} />

        <div className='menu'>
          {/* <div className="navigation-button">
            <span className="navigation-icon">&nbsp;</span>
          </div> */}

          <input type='checkbox' className='menu-checkbox' id='menu-toggle' />

          <label htmlFor='menu-toggle' className='navigation-button'>
            <span className='navigation-icon'>&nbsp;</span>
          </label>

          <div className='menu-background'>&nbsp;</div>

          <div className='menu-open'>
            <ul className='menu-list'>
              <li className='menu-item'>
                <a href='#' className='menu-link'>
                  <span>01</span> Psykologisk Behandling
                </a>
              </li>
              <li className='menu-item'>
                <a href='#' className='menu-link'>
                  <span>02</span> Psykologisk Veiledning
                </a>
              </li>
              <li className='menu-item'>
                <a href='#' className='menu-link'>
                  <span>03</span> ISTDP
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='bg-video'>
          <video className='video-content' autoPlay muted loop>
            <source src={require("../../assets/video.mp4")} type='video/mp4' />
          </video>
        </div>
        <div className='header-text-box'>
          <h1 className='heading-primary'>Anna Skjelbred</h1>
          <h2 className='heading-secondary'>
            &copy;Skjelbred Psykolog Consulting
          </h2>
        </div>
      </header>

      <section id='1' className='section-om-meg'>
        <div className='container grid grid--2-cols align-center-v bg-white'>
          <div className='image-box'>
            <img
              src={require("../../assets/d.png")}
              alt='anna'
              className='om-meg-img'
            />
          </div>
          <div className='text-box'>
            <div className='om-meg-heading'>Litt om meg</div>
            <div className='om-meg-description'>
              Jeg er utdannet psykolog fra NTNU. Til daglig arbeider jeg ved St.
              Olavs hospital som poliklinisk behandler og har erfaring med
              behandling av forskjellige typer psykiske lidelser og psykologiske
              problemstillinger. I tillegg har jeg også en god del erfaring fra
              ledelse og næringslivet. Gjennom min private praksis ønsker jeg å
              tilby deg psykologisk hjelp tilpasset dine behov og basert på
              effektive evidensbaserte metoder.
            </div>
          </div>
        </div>
      </section>

      <section id="2" className="priser">
        <div className="container grid grid--3-cols align-center-v">
          <div className="card">
            <div className="card-side card-side-front">
              <div className="card-picture card-picture-1">&nbsp;</div>
              <h4 className="card-heading">
                <span className="card-heading-span card-heading-span-1">
                  Enkel <br /> time
                </span>
              </h4>
              <div className='card-details'>
                <ul className='details-list'>
                  <li className='details-item'>45 min</li>
                  <li className='details-item'>45 min</li>
                  <li className='details-item'>45 min</li>
                  <li className='details-item'>45 min</li>
                </ul>
              </div>
            </div>
            <div className='card-side card-side-back card-side-back-1'>
              <div className='card-cta'>
                <div className='card-price-box'>
                  {/* <p className="card-price-text">Bare</p> */}
                  <p className='card-price-value'> kr 1.350,-</p>
                </div>
                <a href='#' className='btn-white'>
                  Bestill time nå
                </a>
              </div>
            </div>
          </div>
        <section/>

          <div className='card'>
            <div className='card-side card-side-front'>
              <div className='card-picture card-picture-2'>&nbsp;</div>
              <h4 className='card-heading'>
                <span className='card-heading-span card-heading-span-1'>
                  Student <br /> pris
                </span>
              </h4>
              <div className='card-details'>
                <ul className='details-list'>
                  <li className='details-item'>45 min</li>
                  <li className='details-item'>45 min</li>
                  <li className='details-item'>45 min</li>
                  <li className='details-item'>45 min</li>
                </ul>
              </div>
            </div>
            <div className='card-side card-side-back card-side-back-2'>
              <div className='card-cta'>
                <div className='card-price-box'>
                  {/* <p className="card-price-text">Bare</p> */}
                  <p className='card-price-value'> kr 1.200,-</p>
                </div>
                <a href='#' className='btn-white'>
                  Bestill time nå
                </a>
              </div>
            </div>
          </div>

          <div className='card'>
            <div className='card-side card-side-front'>
              <div className='card-picture card-picture-3'>&nbsp;</div>
              <h4 className='card-heading'>
                <span className='card-heading-span card-heading-span-3'>
                  Dobbelt <br /> time
                </span>
              </h4>
              <div className='card-details'>
                <ul className='details-list'>
                  <li className='details-item'>45 min</li>
                  <li className='details-item'>45 min</li>
                  <li className='details-item'>45 min</li>
                  <li className='details-item'>45 min</li>
                </ul>
              </div>
            </div>
            <div className='card-side card-side-back card-side-back-3'>
              <div className='card-cta'>
                <div className='card-price-box'>
                  {/* <p className="card-price-text">Bare</p> */}
                  <p className='card-price-value'> kr 1.900,-</p>
                </div>
                <a href='#' className='btn-white'>
                  Bestill time nå
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="custom-shape-divider-top-1668869023">

     
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
            >
          </svg>
          
        <div/>
    </Fragment>
  );
}

export default Home;
