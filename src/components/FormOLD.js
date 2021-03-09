
//   import React from 'react';
//   import ReactDOM from 'react-dom';
//   import Button from 'react-bootstrap/Button';

  
//   class Form extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { username: '' ,
//                      startLat: null,
//                      startLng: null,
//                      stopLat: null, 
//                      stopLng: null, 
//     };
//     }
//     mySubmitHandler = (event) => {
//       event.preventDefault();
//       alert("You are submitting " + this.state.username);
//     }
//     myChangeHandler = (event) => {
//         let username = event.target.name
//         let startLat = event.target.startLat
//         let startLng = event.target.startLng
//         let stopLat  = event.target.stopLat
//         let stopLng  = event.target.stopLng

//       this.setState({username: event.target.value});
//     }
  
//     render() {
//       return (
//         <form>
//       <h1>Hello {this.state.username} {this.state.age}</h1>
//       <p>Enter your name:</p>
//       <input
//         type='text'
//         name='username'
//         onChange={this.myChangeHandler}
//       />
//       <p>Enter Start Latitude:</p>
//       <input
//         type='text'
//         name ='startLat'
//         onChange={this.myChangeHandler}
//       />

// <p>Enter Start Longitude:</p>
//       <input
//         type='text'
//         name='startLat'
//         onChange={this.myChangeHandler}
//       />

// <p>Enter Stop Latitude:</p>
//       <input
//         type='text'
//         name='startLat'
//         onChange={this.myChangeHandler}  s
//       />

// <p>Enter Stop Longitude:</p>
//       <input
//         type='text'
//         startLng='name'
//         onChange={this.myChangeHandler}
//       />
//       </form>
       

       
//       //  <form onSubmit={this.mySubmitHandler}> s
//       //   <h1>Hello {this.state.username}</h1>
//       //   <p>Enter your name, and submit:</p>
//       //   <input
//       //     type='text'
//       //     onChange={this.myChangeHandler}
//       //   />
//       //   <input
//       //     type='submit'
//       //   />
//       //   </form>
//       );
//     }
//   }



// export default Form;