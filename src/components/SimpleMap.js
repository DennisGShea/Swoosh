import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocMarker from "./LocMarker";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAquboocr5toIDwa677daa6O52jwysblng");
Geocode.enableDebug();

function SimpleMap() {
  const [fbData, setFbData] = useState([]);
  const [routesData, setRoutesData] = useState([]);

  //let API_URL = `http://localhost:5000/route/`;
  let API_URL = `https://swoosh-api.web.app/route/`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setFbData(data);
      });
  }, []);

  useEffect(() => {
    fbData.forEach((route) => {
      Geocode.fromLatLng(route.start.lat, route.start.lng)
        .then((response) => {
          return (response && (response.results[0].formatted_address).length > 0) && setRoutesData((add) => add.concat(response.results[0].formatted_address))
        })
        .catch((err) => console.log(err));
    })
  }, [fbData]);

  const defaultProps = {
    center: {
      lat: 26.363314,
      lng: -80.17535,
    },
    zoom: 12,
  };

  return (
    <div className="box5">
      <div style={{ height: "500px", width: "800px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAquboocr5toIDwa677daa6O52jwysblng" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {fbData.map((route, i) => (
            <LocMarker lat={route.start.lat} lng={route.start.lng} text={i + 1} />
          ))}
        </GoogleMapReact>

        <footer>
            <h3> <p>........</p> </h3>
            
            <ol>
              {routesData && routesData.length > 0 &&
                routesData.map((route, i) => <li key={i}>{route}</li>)}
            </ol>

         
            <p>......</p>
              
           <p> 26.35817872513297, -80.21232710047386   </p>
        

         
        </footer>
      </div>
    </div>
  );
}

export default SimpleMap;
