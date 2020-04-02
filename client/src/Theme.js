import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const theme = {
  colors: {
    diamond: "#BCE0FF",
    rubyRed: "#FF234B",
    azure: "#3881FF",
    pink: "#E82473",
    navyBlue: "#110072",
    almostWhite: "#FAFAFA"
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.shape().isRequired
};
export default Theme;
