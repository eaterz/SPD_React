import React from "react";

export default function Quote(props) {
  return (
    <div>
      <h1>{props.virs}</h1>
      <h2>{props.autors}</h2>
      <p>{props.citats}</p>
    </div>
  );
}
