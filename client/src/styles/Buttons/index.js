/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

const Button = styled.button`
  border: 1px solid ${props => props.theme.colors.pink};
  margin: auto 0.3rem;
  cursor: pointer;
  transition: all ease-in-out 0.25s;
  border-radius: 3px;
`;

export const PrimaryButton = styled(Button)`
  background: ${props => props.theme.colors.pink};
  color: ${props => props.theme.colors.almostWhite};
  font-size: ${props => {
    switch (props.size) {
      case "s":
        return props.theme.fontSizes.small;
      case "m":
        return props.theme.fontSizes.medium;
      case "l":
        return props.theme.fontSizes.medium;
      default:
        return props.theme.fontSizes.small;
    }
  }};

  &:hover {
    background: ${props => props.theme.colors.almostWhite};
    color: ${props => props.theme.colors.pink};
  }
`;

export const SecondaryButton = styled(Button)`
  background: ${props => props.theme.colors.almostWhite};
  color: ${props => props.theme.colors.pink};
  font-size: ${props => {
    switch (props.size) {
      case "s":
        return props.theme.fontSizes.small;
      case "m":
        return props.theme.fontSizes.medium;
      case "l":
        return props.theme.fontSizes.medium;
      default:
        return props.theme.fontSizes.small;
    }
  }};

  &:hover {
    background: ${props => props.theme.colors.pink};
    color: ${props => props.theme.colors.almostWhite};
  }
`;
