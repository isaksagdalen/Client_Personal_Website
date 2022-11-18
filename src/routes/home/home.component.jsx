import "./home.styles.css";

function Home() {
  return (
    <header className="header">
      <navigation className="nav">
        <div className="logo-box">
          <img
            src={require("../../assets/original.png")}
            alt="logo"
            className="logo"
          />
        </div>
        <ul className="nav-list">
          <li className="nav-items">
            <a href="#" className="nav-links">
              Om meg
            </a>
          </li>
          {/* <li className="nav-items">
            <a href="#" className="nav-links">
              Psykologisk behandling
            </a>
          </li>
          <li className="nav-items">
            <a href="#" className="nav-links">
              Psykologisk veiledning
            </a>
          </li>
          <li className="nav-items">
            <a href="#" className="nav-links">
              ISTDP
            </a>
          </li> */}
          <li className="nav-items">
            <a href="#" className="nav-links">
              Priser
            </a>
          </li>
          <a href="#" className="btn">
            Bestill time
          </a>
        </ul>
      </navigation>
      <div className="bg-video">
        <video className="video-content" autoPlay muted loop>
          <source src={require("../../assets/video.mp4")} type="video/mp4" />
        </video>
      </div>
      <div className="header-text-box">
        <h1 className="heading-primary">Anna Skjelbred</h1>
        <h2 className="heading-secondary">Psykolog</h2>
      </div>
    </header>
  );
}

export default Home;
