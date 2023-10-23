import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

function Map({ location }) {
  const [viewport, setViewport] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setViewport({
          lat: parseFloat(position.coords.latitude),
          lng: parseFloat(position.coords.longitude),
        });
      });
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey={"abc"}>
      <GoogleMap
        center={viewport}
        zoom={13}
        mapContainerStyle={{
          width: "100%",
          height: "500px",
        }}
      >
        {location.map((ele, index) => {
          const latitude = parseFloat(ele.lat);
          const longitude = parseFloat(ele.lng);
          if (!isNaN(latitude) && !isNaN(longitude)) {
            return (
              <Marker
                key={index}
                position={{ lat: latitude, lng: longitude }}
              />
            );
          } else {
            console.error(
              "Invalid latitude or longitude value at index:",
              index
            );
            return null;
          }
        })}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
