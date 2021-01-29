import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl';
import * as groomerData from './data/groomer-data.json';
import './markerButton.scss';
import dogsvg from './image/dog.svg';
import Geocoder from 'react-map-gl-geocoder';

// const geolocateControlStyle = {
//   float: 'right',
//   margin: '0px',
//   padding: '10px',
// };

function Map() {
  const [viewport, setViewport] = useState({
    width: 600,
    height: 600,
    latitude: 42.6526,
    longitude: -73.7562,
    zoom: 8,
  });

  const myMap = useRef();
  const handleViewportChange = useCallback(
    newViewport => setViewport(newViewport),
    []
  );

  const [selectedGroomer, setSelectedGroomer] = useState(null);
  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        setSelectedGroomer(null);
      }
    };
    window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <ReactMapGL
      ref={myMap}
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle={'mapbox://styles/divsoup/ckk4qcnpc086z17pqx64yn4v9'}
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
    >
      {groomerData.groomers.map(groomer => (
        <Marker key={groomer.id} latitude={groomer.lat} longitude={groomer.lon}>
          <button
            className="marker-button"
            onClick={e => {
              e.preventDefault();
              setSelectedGroomer(groomer);
            }}
          >
            <img src={dogsvg} alt="dog-bone" />
          </button>
        </Marker>
      ))}
      {selectedGroomer ? (
        <Popup
          latitude={selectedGroomer.lat}
          longitude={selectedGroomer.lon}
          onClose={() => {
            setSelectedGroomer(null);
          }}
        >
          <div>
            <h2>{selectedGroomer.name}</h2>
            <p>{selectedGroomer.address}</p>
            <p>{selectedGroomer.stars}</p>
          </div>
        </Popup>
      ) : null}

      <Geocoder
        mapRef={myMap}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={handleViewportChange}
        position="top-left"
      />
      <div style={{ position: 'absolute', right: 0 }}>
        <GeolocateControl />
        <NavigationControl />
      </div>
    </ReactMapGL>
  );
}

export default Map;
