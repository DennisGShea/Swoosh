import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocMarker from "./LocMarker";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAquboocr5toIDwa677daa6O52jwysblng");
Geocode.enableDebug();

function SimpleMap() {
  const [loc, setLoc] = useState();
  const [locList, setLocList] = useState({ lat: 26.36331, lng: -80.17535 });
  const [data, setData] = useState([]);
  const API_URL = `http://localhost:5000/route/`;

  // { lat: 26.36331, lng: -80.17535 }

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(() => console.log("data from db", data));

    // this is to get the address from lat / long
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
  }, []);

  const defaultProps = {
    center: {
      lat: 26.363314,
      lng: -80.17535,
    },
    zoom: 10,
  };

  // const Pins = data.map(locItem => {
  //   return  <LocMarker
  //   lat={locItem.start.lat}
  //   lng={locItem.start.lng}
  //   text={"A"}
  // />
  // })

  return (
    <div className="box5">
      <div style={{ height: "500px", width: "800px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAquboocr5toIDwa677daa6O52jwysblng" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {/* need to map over the array of data and return the loc marker here */}

          {data.map((route, i) => {
            return (
              <>
                <LocMarker
                  lat={route.start.lat}
                  lng={route.start.lng}
                  text={"H"}
                  key={i}
                />

                <LocMarker
                  lat={route.stop.lat}
                  lng={route.stop.lng}
                  text={"J"}
                  key={i}
                />
              </>
            );
          })}

          <LocMarker
            lat={26.267046971396073}
            lng={-80.08372602942676}
            text={"z"}
          />

          {/* <LocMarker
            lat={26.39154382847964}
            lng={-80.10902143305083}
            text={"B"}
          /> */}

          {/* <
      { Data.map(route => {
        return 
        (<div>
          )
      }/> */}
        </GoogleMapReact>

        <footer>
          <h3>
            <p>......</p>
            footer area for map{" "}
          </h3>
        </footer>
      </div>
      <ul>
        <li>The loc is: {loc} </li>
        {/* <li>The loc is: {loc} </li>
        <li>The loc is: {loc} </li> */}
      </ul>
    </div>
  );
}

export default SimpleMap;
