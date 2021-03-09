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
          console.log("showwww state",state);
        };
      
        return (
          <div className="App">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={state.email}
                  onChange={handleInputChange}
                />
              </div>

          


              <div className="form-control">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={state.password}
                  onChange={handleInputChange}
                />

              <label>Lattitude</label>
                <input    
                  type="lattttt"
                  name="lattttt"
                  value={state.startLattitude}
                  onChange={handleInputChange}
                />

            <label>Start-Longitude</label>
                <input    
                  type="startLng"
                  name="startLng"
                  value={state.lnggggg}
                  onChange={handleInputChange}
                />

              </div>



             


              <div className="form-control">
                <label></label>
                <button type="submit">Loggggin</button>
              </div>
            </form>
          </div>
        );
      }


    
    
    export default Form
