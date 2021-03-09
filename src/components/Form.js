  import React, { useState } from 'react';
  import ReactDOM from 'react-dom';
  import "../../src/styles.css";
 
  function Form (props) {
  
        const [state, setState] = useState({
          email: "",
          password: ""
        });
      
        const handleInputChange = (event) => {
          setState((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
          }));
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          console.log("show state",state); // fetch here ???
        };
      
        return (
          <div className="App">
            <form onSubmit={handleSubmit}>
              <h3>Enter Ride Location Coordinates: </h3>
              {/* <div className="form-control">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={state.email}
                  onChange={handleInputChange}
                />
              </div> */}

          
               {/* <div className="form-control">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={state.password}
                  onChange={handleInputChange}
                /> */}
         
          <div className="form-control">
              <label>Start-Lattitude</label>
                <input    
                  type="text"
                  name="Start-Lat"
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
