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
  textAlign,
  space,
} from "styled-system";

/**
 * StyledHeading is a styled-component that renders an HTML heading element
 * with styles based on the theme configuration and additional props.
 * It makes use of styled-system utility functions to enable theme-driven
 * styling.
 */
const StyledHeading = styled(({ level, children, ...rest }) =>
  React.createElement(level, rest, children)
)`
  ${compose(
    fontSize,
    color,
    lineHeight,
    letterSpacing,
    fontFamily,
    fontWeight,
    textAlign,
    space
  )}
`;

/**
 * Heading is a versatile and theme-driven heading component that supports
 * all heading levels (h1 to h6). It automatically applies default styles
 * from the theme configuration based on the heading level.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.level='h1'] - The heading level (h1 to h6).
 * @param {React.ReactNode} props.children - The content to render inside the heading.
 * @param {...Object} props.rest - The remaining properties to pass to the StyledHeading component.
 *
 * @returns {React.Element} The rendered Heading component.
 */

const Heading = ({ level = "h1", children, ...rest }) => {
  const theme = useTheme();

  // Merge default and level-specific configurations from the theme
  const defaultProps = {
    ...theme.headings.default,
    ...theme.headings[level],
  };

  return (
    <StyledHeading level={level} {...defaultProps} {...rest}>
      {children}
    </StyledHeading>
  );
};

export default Heading;

Heading.propTypes = {
  level: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  level: "h1",
};
