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
      <header className="header">
        <NavBar navBarItems={HOME_NAV_BAR_ITEMS} />
        <div className="bg-video">
          <video className="video-content" autoPlay muted loop>
            <source src={require("../../assets/video.mp4")} type="video/mp4" />
          </video>
        </div>
        <div className="header-text-box">
          <h1 className="heading-primary">Anna Skjelbred</h1>
          <h2 className="heading-secondary">
            &copy; Skjelbred Psykolog Consulting
          </h2>
        </div>
      </header>

      <section id="1" className="section-om-meg">
        <div className="container grid grid--2-cols align-center-v bg-white">
          <div className="image-box">
            <img
              src={require("../../assets/d.png")}
              alt="anna"
              className="om-meg-img"
            />
          </div>
          <div className="text-box">
            <div className="om-meg-heading">Litt om meg</div>
            <div className="om-meg-description">
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

      <section className="priser">
        <div className="container grid grid--3-cols align-center-v">
          <div className="card">
            <div className="card-side card-side-front">
              <div className="card-picture card-picture-1">&nbsp;</div>
              <h4 className="card-heading">
                <span className="card-heading-span card-heading-span-1">
                  Enkel <br /> time
                </span>
              </h4>
              <div className="card-details">
                <ul className="details-list">
                  <li className="details-item">45 min</li>
                  <li className="details-item">45 min</li>
                  <li className="details-item">45 min</li>
                  <li className="details-item">45 min</li>
                </ul>
              </div>
            </div>
            <div className="card-side card-side-back card-side-back-1">
              <div className="card-cta">
                <div className="card-price-box">
                  {/* <p className="card-price-text">Bare</p> */}
                  <p className="card-price-value"> kr 1.350,-</p>
                </div>
                <a href="#" className="btn-white">
                  Bestill time nå
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-side card-side-front">
              <div className="card-picture card-picture-2">&nbsp;</div>
              <h4 className="card-heading">
                <span className="card-heading-span card-heading-span-1">
                  Student <br /> pris
                </span>
              </h4>
              <div className="card-details">
                <ul className="details-list">
                  <li className="details-item">45 min</li>
                  <li className="details-item">45 min</li>
                  <li className="details-item">45 min</li>
                  <li className="details-item">45 min</li>
                </ul>
              </div>
            </div>
            <div className="card-side card-side-back card-side-back-2">
              <div className="card-cta">
                <div className="card-price-box">
                  {/* <p className="card-price-text">Bare</p> */}
                  <p className="card-price-value"> kr 1.200,-</p>
                </div>
                <a href="#" className="btn-white">
                  Bestill time nå
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-side card-side-front">
              <div className="card-picture card-picture-3">&nbsp;</div>
              <h4 className="card-heading">
                <span className="card-heading-span card-heading-span-3">
                  Dobbelt <br /> time
                </span>
              </h4>
              <div className="card-details">
                <ul className="details-list">
                  <li className="details-item">45 min</li>
                  <li className="details-item">45 min</li>
                  <li className="details-item">45 min</li>
                  <li className="details-item">45 min</li>
                </ul>
              </div>
            </div>
            <div className="card-side card-side-back card-side-back-3">
              <div className="card-cta">
                <div className="card-price-box">
                  {/* <p className="card-price-text">Bare</p> */}
                  <p className="card-price-value"> kr 1.900,-</p>
                </div>
                <a href="#" className="btn-white">
                  Bestill time nå
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="custom-shape-divider-top-1668869023">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </Fragment>
  );
}

export default Home;
