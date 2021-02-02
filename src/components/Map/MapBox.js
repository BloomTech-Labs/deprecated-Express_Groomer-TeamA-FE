import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import './mapBox.scss';
import Geocoder from 'react-map-gl-geocoder';
import { Link } from 'react-router-dom';
import MapModal from './MapModal';
import { Tooltip } from 'antd';

/*Dummy data used to test functionality of the map...should be switched to user information 
either by connecting to Redux or by prop drilling*/
const groomers = [
  { name: 'groomer1', lat: 42.7478, lon: -73.7605 },
  { name: 'groomer2', lat: 42.6478, lon: -73.6605 },
  { name: 'groomer3', lat: 42.8478, lon: -73.8605 },
  { name: 'groomer4', lat: 42.9478, lon: -73.9605 },
];

function MapBox() {
  // initial map viewport state
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    width: '50vw',
    height: '50vh',
    zoom: 10,
  });

  const mapRef = useRef();

  const handleViewportChange = useCallback(
    newViewport => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback(newViewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return handleViewportChange({
      ...newViewport,
      ...geocoderDefaultOverrides,
    });
  }, []);

  useEffect(() => {
    // gets users location through browser window and sets viewport to users local area
    window.navigator.geolocation.getCurrentPosition(
      position => {
        setViewport({
          ...viewport,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      err => console.log(err)
    );
  }, []);

  console.log(viewport);

  return (
    <div className="map-container">
      <div className="map-top-content">
        <h1 className="map-header">Search For Groomers</h1>
        <Tooltip title="List-View">
          <span>
            {' '}
            <Link to="/profile-list">
              <i class="fas fa-clipboard-list"></i>
            </Link>
          </span>
        </Tooltip>
      </div>

      <div className="map-box">
        <ReactMapGL
          {...viewport}
          ref={mapRef}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle={'mapbox://styles/mdl518/ckfxkaya10bwx1apfnhoyj92x'}
          onViewportChange={handleViewportChange}
        >
          {groomers.map(groomer => (
            <Marker latitude={groomer.lat} longitude={groomer.lon}>
              <MapModal groomer={groomer} />
            </Marker>
          ))}
          <Geocoder
            mapRef={mapRef}
            onViewportChange={handleGeocoderViewportChange}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            position="top-right"
          />
        </ReactMapGL>
      </div>
    </div>
  );
}

export default MapBox;
