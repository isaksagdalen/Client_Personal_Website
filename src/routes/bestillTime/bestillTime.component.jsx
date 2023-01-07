import "./bestillTime.styles.css";
import NavBar from "../../components/navBar/navBar.component";
import Footer from "../../components/footer/footer.component";
import Menu from "../../components/menu/menu.component";
import FieldContainer from "../../components/fieldContainer/fieldContainer.component";
import React, { useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

function BestillTime() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(10.3975004);
  const [lat] = useState(63.4340235);
  const [zoom] = useState(15);
  const [API_KEY] = useState("tLpT5Ko2C8ATzfO1hfvV");

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([lng, lat])
      .addTo(map.current);
  });

  const form = useRef();
  const sendEmail = () => {
    toggleModal();

    emailjs.sendForm(
      "service_j3spnv2",
      "template_led565j",
      form.current,
      "qERSkzCuShagwk9op"
    );
  };

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      <NavBar bestill={true} />
      <Menu />
      {isModalOpen && (
        <div className='modal hidden'>
          <h2 className='mld'>Melding Sendt!</h2>
          <button onClick={toggleModal} className='close-modal'>
            &times;
          </button>
        </div>
      )}
      <div className='map-form-container'>
        <div className='map-title-container'>
          <h2 className='map-title'>Adresse: Nordre Gate 21</h2>
          <div className='map-wrap'>
            <div ref={mapContainer} className='map' />
          </div>
        </div>

        <form ref={form} className='form-fields' onSubmit={sendEmail}>
          <FieldContainer
            name='user_name'
            type='text'
            title='Navn'
            placeholder='Anna Skjelbred'
          />
          <FieldContainer
            name='user_email'
            type='email'
            required
            title='E-postadresse'
            placeholder='anna@gmail.com'
          />
          <FieldContainer
            name='message'
            large={true}
            type='text'
            title='Melding'
            placeholder=''
          />
          <button className='submit-form'>Send</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default BestillTime;
