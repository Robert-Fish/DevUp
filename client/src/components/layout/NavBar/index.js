import React from "react";
import { NavBarContainer, NavBarBrandLogo } from "../../../styles/NavBar";
import { Link } from "../../../styles/Links";

export default function Navbar() {
  return (
    <NavBarContainer>
      <NavBarBrandLogo>DevUp</NavBarBrandLogo>
      <div>
        <Link to="/login">Got An Account With Us?</Link>
        <Link to="/register">Register</Link>
      </div>
    </NavBarContainer>
  );
}
