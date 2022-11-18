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
        <div className='bg-video'>
          <video className='video-content' autoPlay muted loop>
            <source src={require("../../assets/video.mp4")} type='video/mp4' />
          </video>
        </div>
        <div className='header-text-box'>
          <h1 className='heading-primary'>Anna Skjelbred</h1>
          <h2 className='heading-secondary'>
            &copy; Skjelbred Psykolog Consulting
          </h2>
        </div>
      </header>

      <section id='1' className='section-om-meg'>
        <div className='container grid grid--2-cols align-center-v  margin-bottom-big'>
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

        <div className='container grid grid--2-cols align-center-v '>
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
          <div className='image-box'>
            <img
              src={require("../../assets/d.png")}
              alt='anna'
              className='om-meg-img'
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Home;
