import React from "react";
import spinner from "../../assets/spinner.svg";
export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt=""
        style={{
          width: "200px",
          margin: "auto",
          display: "block"
        }}
      />
    </div>
  );
}
