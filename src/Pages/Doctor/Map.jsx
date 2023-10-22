import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

function Map({ location }) {
  const [locations, setLocations] = useState([]);
  const [viewport, setViewport] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    setLocations([]);
    setLocations(location);
    console.log(locations);
  }, [location]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        setViewport({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.API_KEY}>
      <GoogleMap
        center={viewport}
        zoom={13}
        mapContainerStyle={{
          width: "100%",
          height: "500px",
        }}
      >
        {locations.length &&
          locations.map((ele, index) => {
            return <Marker key={index} position={ele} />;
          })}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;

// { lat: lat2, lng: lon2 }
