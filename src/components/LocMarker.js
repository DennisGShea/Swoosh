import React from "react";

function LocMarker(props) {
  return (
    <div
      style={{
        backgroundColor: "orange",
        border: "solid 3px red",
        width: "10px",
      }}
    >
      <h1>{props.text}</h1>
    </div>
  );
}

export default LocMarker;
