import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocMarker from "./LocMarker";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAquboocr5toIDwa677daa6O52jwysblng");
Geocode.enableDebug();


function SimpleMap() {
  const [loc, setLoc] = useState();
  const [locList, setLocList] = useState({ lat: 26.36331, lng: -80.17535 });

  useEffect(() => {
    console.log("we are here!!!");

    Geocode.fromLatLng(locList.lat, locList.lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address, "we are biking in Boca now !!!");
        setLoc(address);
      },
      (error) => {
        console.error(error);
      }
    );
  });

  const defaultProps = {
    center: {
      lat: 26.363314,
      lng: -80.17535,
    },
    zoom: 10,
  };

  return (

    <div style={{ height: "350px", width: "400px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAquboocr5toIDwa677daa6O52jwysblng" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >

        <LocMarker lat={locList.lat} lng={locList.lng} text={"A"} />
        <LocMarker lat={ 26.39154382847964} lng={-80.10902143305083} text={"B"} />
        {/* <
      Data.map(route => {
     return 
      }/> */}
      </GoogleMapReact>
      <h3>......</h3>
      <h3>The name of the loc is: {loc} </h3>
    </div>
  );
}

export default SimpleMap;
