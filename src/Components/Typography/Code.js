/**
 * The Code component is a styled <code> element for rendering inline code
 * in your React application. It uses styled-system utilities to allow
 * theme-driven customization and additional props for controlling appearance.
 *
 * @component
 * @example
 * // Use the Code component with default theme styles
 * <Code>
 *   const foo = 'bar';
 * </Code>
 *
 * @example
 * // Customize the Code component with additional props
 * <Code
 *   fontSize="1.2rem"
 *   color="white"
 *   bg="blue"
 *   fontWeight="bold"
 *   borderRadius={8}
 * >
 *   const foo = 'bar';
 * </Code>
 */
import styled from "styled-components";
import PropTypes from "prop-types";
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
  background,
} from "styled-system";

/**
 * The Code component is a styled <code> element for rendering inline code
 * in your React application.
 *
 * @param {object} props - The props of the component.
 * @param {React.ReactNode} props.children - The content to display inside the Code component.
 * @param {...object} props.rest - Additional props for customizing the appearance (e.g., fontSize, color, lineHeight, etc.).
 * Refer to the styled-system documentation for a complete list of available props.
 * @returns {JSX.Element} The Code component.
 */
const Code = styled.code`
  ${compose(
    fontSize,
    color,
    lineHeight,
    letterSpacing,
    fontFamily,
    fontWeight,
    textAlign,
    space,
    background
  )}
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

Code.propTypes = {
  children: PropTypes.node.isRequired,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...space.propTypes,
  ...background.propTypes,
};

export default Code;
