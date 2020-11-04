import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import './mapBox.scss';

const groomers = [{ name: 'groomer1', lat: 42.7478, lon: -73.7605 }];

function MapBox() {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    width: '50vw',
    height: '50vh',
    zoom: 10,
  });

  useEffect(() => {
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
      <h1>MAPBOX component</h1>
      <div className="map-box">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_API_KEY}
          mapStyle={'mapbox://styles/mdl518/ckfxkaya10bwx1apfnhoyj92x'}
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
        >
          {groomers.map(groomer => (
            <Marker latitude={groomer.lat} longitude={groomer.lon}>
              <button className="marker-btn">
                <img
                  src="https://www.pinclipart.com/picdir/middle/45-451842_black-small-dog-silhouette-svg-png-icon-free.png"
                  alt="dog icon"
                />
              </button>
            </Marker>
          ))}
        </ReactMapGL>
      </div>
    </div>
  );
}

export default MapBox;
