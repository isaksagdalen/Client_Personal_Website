import "./home.styles.css";
import { Fragment } from "react";
import NavBar from "../../components/navBar/navBar.component";
import Menu from "../../components/menu/menu.component";
import Footer from "../../components/footer/footer.component";
import ShapeDivider from "../../components/shapeDivider/shapeDivider.component";
import { useEffect, useRef } from "react";

const HOME_NAV_BAR_ITEMS = [
  { title: "Om meg", link: "#", index: 1 },
  { title: "Priser", link: "#", index: 2 },
];

function Home() {
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   videoRef.current.style.display = "block";
  // }, []);

  return (
    <Fragment>
      <header className="header">
        <NavBar navBarItems={HOME_NAV_BAR_ITEMS} />
        <Menu />

        <div className="bg-video">
          {/* <video
            className="video-content"
            autoPlay
            muted
            loop
            ref={videoRef}
            controls={false}
            controlslist="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
            style={{ display: "none" }}
          >
            <source src={require("../../assets/video2.mp4")} type="video/mp4" />
          </video> */}
        </div>
        <div className="header-text-box">
          <h1 className="heading-primary">Anna Skjelbred</h1>
          <h2 className="heading-secondary">
            &copy;Skjelbred Psykolog Consulting
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
              <div className="card-details">
                <ul className="details-list">
                  <li className="details-item">Varighet:</li>
                  <li className="details-item">50 min</li>
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
                  <li className="details-item">Varighet:</li>
                  <li className="details-item">50 min</li>
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
                  <li className="details-item">Varighet:</li>
                  <li className="details-item">90 min</li>
                </ul>
              </div>
            </div>
            <div className="card-side card-side-back card-side-back-3">
              <div className="card-cta">
                <div className="card-price-box">
                  <p className="card-price-value"> kr 1.900,-</p>
                </div>
                <a href="#" className="btn-white">
                  Bestill time nå
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pris-description margin-top-big">
          <p className="pris-description-text">
            Avbestilling pr. sms eller mail. Senest 72 timer (3 dager) før
            timen. <br /> For ubenyttede og for sent avbestilte timer faktureres
            det et gebyr på kr 600,-.
          </p>
        </div>
        <ShapeDivider />
      </section>
      <Footer />
    </Fragment>
  );
}

export default Home;
