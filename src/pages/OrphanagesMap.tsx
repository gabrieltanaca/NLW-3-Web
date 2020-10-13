import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../images/map-marker.svg";

import "../styles/pages/orphanages-map.css";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <Link to="/" className="back-page">
            <FiArrowLeft size={20} color="rgba(0, 0, 0, 0.6)" />
          </Link>

          <img src={mapMarkerImg} alt="map-marker" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>São Vicente</strong>
          <span>São Paulo</span>
        </footer>

        <Link to="/app" className="create-orphanage">
          <FiPlus size={32} color="#FFF" />
        </Link>
      </aside>

      <Map
        center={[-23.9637794, -46.3927973]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`}
        />
      </Map>
    </div>
  );
}

export default OrphanagesMap;
