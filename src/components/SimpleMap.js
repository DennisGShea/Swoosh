import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocMarker from "./LocMarker"
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAquboocr5toIDwa677daa6O52jwysblng");
Geocode.enableDebug();

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const AnyReactComponent2 = ({ text }) => <div>{text}</div>;

// Boca Code  lat, lng
//26.36331496268262, -80.17535082449808
//  The Breakers, WPB
// 26.76367404082686, -80.16152870172061
//  Eiffel Tower
//  48.8583701, 2.2922926

// 1 - change to Functional component
// 2 - Set up useEffect hook - so that as soon as it loads it uses lat/long to get info about it
// 2.1 - in this hook we use the Geocode.fromLatLng(lat, long).then()
// 3 - set up useState hook  - so that we could save this info about the location and display it
// 4. set geolocation on loc state

function SimpleMap() {
  const [loc, setLoc] = useState();
  const [locList, setLocList] = useState( {lat: 26.36331,lng:-80.17535 })
 


  useEffect(() => {
    console.log("we are here!!!");

    // Geocode.fromLatLng("48.8583701", "2.2922926").then(
    Geocode.fromLatLng(locList.lat, locList.lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address, "we are biking in Boca now !!!");
        setLoc (address)
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
      //lat:48.8583701,
      //lng:2.2922926
    },
    zoom: 10,
  };

  return (
    // Important! Always set the container height explicitly
    
    <div style={{ height: "350px", width: "400px"   }}>
      
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAquboocr5toIDwa677daa6O52jwysblng" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent lat={48.8583701} lng={2.2922926} text="Bike !!!!" />   Eiffel tower loc  */}
        <AnyReactComponent
          lat= {locList.lat}
          lng={locList.lng}
          text={loc}
        />
        {/* <AnyReactComponent2
          lat={26.763674}
          lng={-80.16152}
          text="Bike 2222122222"
        /> */}
<div>ZZZZZ  </div>
     < LocMarker />
    
     {/* <
      Data.map(route => {
     return 
      }/> */}

        </GoogleMapReact>
        <h3>......</h3>
        <h3>The name of the location is: {loc} </h3>
    </div>
  );
}

export default SimpleMap;
