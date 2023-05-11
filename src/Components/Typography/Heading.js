import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useTheme } from "styled-components";
import {
  compose,
  fontSize,
  color,
  lineHeight,
  letterSpacing,
  fontFamily,
  fontWeight,
} from "styled-system";

// Styled Display component
const StyledDisplay = styled.p`
  ${compose(fontSize, color, lineHeight, letterSpacing, fontFamily, fontWeight)}
`;

// Display component
const Display = ({ variant, children }) => {
  const theme = useTheme();

  const defaultProps = {
    ...theme.fonts[variant],
  };

  return <StyledDisplay {...defaultProps}>{children}</StyledDisplay>;
};

Display.propTypes = {
  variant: PropTypes.oneOf(["displayLarge", "displayMedium", "displaySmall"]),
  children: PropTypes.node.isRequired,
};

Display.defaultProps = {
  variant: "displayLarge",
};

export default Display;
