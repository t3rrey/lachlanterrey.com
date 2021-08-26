import React, { useState } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";
// var MapboxDirections = require("@mapbox/mapbox-gl-directions");
// var direct = new MapboxDirections();
const key =
  "pk.eyJ1IjoibGFjaGxhbnRlcnJleSIsImEiOiJja3NsN3llZTAydXRxMnRvMm5zZHhvaHE2In0.T1DRcqQsXn6hLpLJNDvVug";
const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 45,
    longitude: -75,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={key}
        mapStyle="mapbox://styles/lachlanterrey/ckst3akv50d6w18o8guau4lbx"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <NavigationControl />
      </ReactMapGL>
    </div>
  );
};

export default Map;
