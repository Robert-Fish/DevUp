import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.div`
  background: #fff;
  border-bottom: 1px solid #eaedf3;
  display: flex;
  flex-direction: row;
  height: 2.7rem;
`;

export const NavLeft = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-start;
`;

export const NavRight = styled.div`
  display: flex;
  width: 50%;

  justify-content: flex-end;
`;
export const Logo = styled.h1`
  padding: 0 1rem;
  font-size: 1.3rem;
  font-weight: 100;
  font-family: "Oxygen", sans-serif;
  line-height: 2.7rem;
`;

export const SearchBar = styled.input`
  color: #333;
  margin: 0.3rem 0.5rem;
  border: none;
  width: 20rem;
`;

export const RegisterHint = styled.p`
  font-size: 0.8rem;
  font-weight: 100;
  line-height: 2.7rem;
  margin-right: 2rem;
  font-family: "Oxygen", sans-serif;
`;

export const RegisterLink = styled(Link)`
  font-size: 0.8rem;
  color: black;
  text-decoration: none;
  font-weight: 400;
  line-height: 2.7rem;
  margin-right: 2rem;
  font-family: "Oxygen", sans-serif;
  transition: all ease-in-out 0.3s;
  &:hover {
    color: #1b5bd6;
    font-weight: 600;
    text-decoration: none;
  }
`;

export const LoginLink = styled(RegisterLink)``;

export const ContributeLabel = styled(RegisterHint)``;
