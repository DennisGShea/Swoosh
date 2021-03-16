import React, { useState, useEffect } from "react";
//import ReactDOM from 'react-dom';
import "../../src/styles.css";
const API_URLwGet = `http://localhost:5000/route/`;
const API_URLwPost = `http://localhost:5000/addroute/`;

function Form(props) {
  const [state, setState] = useState({
    // email:"",
    // password:""
  });

  let aRoute = {
    start: {
      lat: 26.43889301173374,
      lng: -80.12386864649514,
    },
    stop: {
      lat: 26.45414827578358,
      lng: -80.2045014603517,
    },
    userid: "dgs12345",
    id: "3066",
  };

  let bRoute = {
    start: {
      lat: state.startLat,
      lng: state.startLng,
    },
    stop: {
      lat: state.stopLat,
      lng: state.stopLng,
    },
    userid: "dgs123456",
    id: "3035",
  };

  useEffect(() => {
    // fetch("http://localhost:5000/route/")
    //   .then((res) => res.json())
      // .then((data) => console.log("route data", data));
  }, []);

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(API_URLwPost, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        start: {
          lat: state.startLat,
          lng: state.startLng,
        },
        stop: {
          lat: state.stopLat,
          lng: state.stopLng,
        },
        userid: "dgs654321"
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Start-Lattitude</label>
          <input
            type="text"
            name="startLat"
            value={state.startLat}
            onChange={handleInputChange}
          />

          <label>Start-Longitude</label>
          <input
            type="type"
            name="startLng"
            value={state.startLng}
            onChange={handleInputChange}
          />

          <label>Stop-Lattitude</label>
          <input
            type="text"
            name="stopLat"
            value={state.stopLat}
            onChange={handleInputChange}
          />

          <label>Stop-Longitude</label>
          <input
            type="text"
            name="stopLng"
            value={state.stopLng}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control">
          <label></label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
