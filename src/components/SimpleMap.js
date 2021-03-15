import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocMarker from "./LocMarker";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAquboocr5toIDwa677daa6O52jwysblng");
Geocode.enableDebug();

function SimpleMap() {
  const [fbData, setFbData] = useState([]);
  const [routesData, setRoutesData] = useState([]);

  const API_URL = `http://localhost:5000/route/`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setFbData(data));
  }, []);

useEffect(() =>  {
if (fbData) {
    fbData.map((route, i) => {
    
      Geocode.fromLatLng(route.start.lat, route.start.lng).then((response) => {
        const routeAddress = response.results[0].formatted_address;
        // console.log('route address here', routeAddress)

        return setRoutesData([...routesData, routeAddress]);
      });
    });
  }
},[fbData])
  

  console.log("this is fbdata", fbData);


  const defaultProps = {
    center: {
      lat: 26.363314,
      lng: -80.17535,
    },
    zoom: 10,
  };

  return (
    <div className="box5">
      <div style={{ height: "500px", width: "800px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAquboocr5toIDwa677daa6O52jwysblng" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {fbData.map((route, i) => {
            return (
              <>
                <LocMarker
                  lat={route.start.lat}
                  lng={route.start.lng}
                  text={i}
                />

                <LocMarker
                  lat={route.stop.lat}
                  lng={route.stop.lng}
                  text={i + 100}
                />
              </>
            );
          })}

          {/* <LocMarker
            lat={26.39154382847964}
            lng={-80.10902143305083}
            text={"B"}
          /> */}
        </GoogleMapReact>

        <footer>
          <h3>
            <p>......</p>
            google-maps-api
          </h3>

          <ul>
            {routesData &&
              routesData.map((route, i) => {
                return <li key={i}>{route}</li>;
              })}
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default SimpleMap;
