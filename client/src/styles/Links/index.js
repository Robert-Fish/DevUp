/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)`
  color: ${props => props.theme.colors.pink};
  margin: auto 0.7rem;
  font-size: 1em;
  &:hover {
    text-decoration-color: ${props => props.theme.colors.pink};
    color: ${props => props.theme.colors.pink};
  }
`;
