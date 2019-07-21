import React, { Component } from "react";
export default class MobileDetector extends Component {
  detectMob = () => {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  };

  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          fontSize: "1.7rem",
          fontFamily: "'oxygen, sans-serif",
          background: "black",
          display: this.detectMob() ? "flex" : "none",
          textAlign: "center",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          overflow: "none",
          backgroundImage:
            "url('https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?cs=srgb&dl=architecture-buildings-cars-1034662.jpg&fm=jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        DevUp is better optimised for desktop
      </div>
    );
  }
}
