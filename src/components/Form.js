  import React, { useState } from 'react';
  //import ReactDOM from 'react-dom';
  import "../../src/styles.css";
 
  let aRoute = 
  {
      stop: {
        lng: -80.333,
        lat: 26.333,
      },
      start: {
        lat: 26.555,
        lng: -80.66666666666,
      },
      userid: "oierg340n5g5",
      id: "99775533",
    }
  

  function Form (props) {
        const [state, setState] = useState({
        // email:"",
        // password:""
        });
      
        const handleInputChange = (event) => {
          setState((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
          }));
        };
       
        const API_URL = `http://localhost:5000/addroute/`
        const handleSubmit = (event) => {
          event.preventDefault();

          fetch(API_URL)
          .then((res) => res.json())
          .then((data) => console.log("route data", data))    
          console.log("show state",state);
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
    
    export default Form
