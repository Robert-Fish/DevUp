import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  background: ${props => props.theme.colors.almostWhite};
  padding: 0.7rem 2rem;
  justify-content: space-between;
`;

export const NavBarBrandLogo = styled.p`
  color: ${props => props.theme.colors.pink};
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.small};
  margin: 0;
`;
