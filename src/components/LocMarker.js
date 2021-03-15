import React from "react";

function LocMarker(props) {
  return (
    <div
      style={{
        backgroundColor: "orange",
        border: "solid 3px red",
        borderRadius: "50%",
        width: "8px",
        height: "12px",
      }}
    >
      <h1>{props.text}</h1>
     
    </div>
  );
}

export default LocMarker;
