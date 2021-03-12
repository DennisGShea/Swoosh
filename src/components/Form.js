import React, { useState, useEffect } from "react";
//import ReactDOM from 'react-dom';
import "../../src/styles.css";
const API_URLwGet = `http://localhost:5000/route/`;
const API_URLwPost = `http://localhost:5000/addroute/`;

let aRoute = {
  start: {
    lat: 26.555,
    lng: -80.66666666666,
  },
  stop: {
    lng: -80.333,
    lat: 26.333,
  },
  userid: "oierg340n5g5",
  id: "99775533",
};

function Form(props) {
  const [state, setState] = useState({
    // email:"",
    // password:""
  });

  useEffect(() => {
    fetch("http://localhost:5000/route/")
      .then((res) => res.json())
      .then((data) => console.log("route data", data));
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
      body: JSON.stringify({ aRoute }),
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
