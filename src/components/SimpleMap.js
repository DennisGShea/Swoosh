import React, { useState, Component, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAquboocr5toIDwa677daa6O52jwysblng");
Geocode.enableDebug();

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const AnyReactComponent2 = ({ text }) => <div>{text}</div>;
// Boca Code  lat, lng
//26.36331496268262, -80.17535082449808
//  The Breakers, WPB
// 26.76367404082686, -80.16152870172061
//

// 1 - change to Functional component
// 2 - Set up useEffect hook - so that as soon as it loads it uses lat/long to get info about it
// 2.1 - in this hook we use the Geocode.fromLatLng(lat, long).then()
// 3 - set up useState hook  - so that we could save this info about the location and display it
// 4. set geolocation on loc state 


function SimpleMap() {
   const  [loc, setLoc] = useState()

useEffect(() => {
    console.log("we are here!!!")

Geocode.fromLatLng("48.8583701", "2.2922926").then( 
  (response) => {
    const address = response.results[0].formatted_address;
    console.log(address, "we are biking in  France now -- oui oui !!!");
  },
  (error) => {
    console.error(error);
  }
); 
  

  }
  )

  const defaultProps = {
    center: {
      // lat: 26.363314,
      // lng: -80.17535,
      lat:48.8583701,
      lng:2.2922926
    },
    zoom: 10,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "500px", width: "500px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAquboocr5toIDwa677daa6O52jwysblng" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
         <AnyReactComponent lat={48.8583701} lng={2.2922926} text="Bike !!!!" />
        {/* <AnyReactComponent lat={26.363314} lng={-80.17535} text="Bike !!!!" />
        <AnyReactComponent2 lat={26.763674} lng={-80.16152} text="Bike 22222" /> */}
      </GoogleMapReact>
    </div>


  );
}

export default SimpleMap;
