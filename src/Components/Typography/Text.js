/**
 * The Text component is a versatile and theme-driven styled <span> element for rendering text
 * in your React application. It uses styled-system utilities to allow
 * theme-driven customization and additional props for controlling appearance.
 *
 * @component
 * @example
 * // Use the Text component with default theme styles
 * <Text>
 *   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * </Text>
 *
 * @example
 * // Customize the Text component with additional props
 * <Text
 *   fontSize="1.5rem"
 *   color="blue"
 *   fontWeight="bold"
 *   textAlign="justify"
 *   my={4}
 * >
 *   Customized text with styled-system props.
 * </Text>
 */

import styled from "styled-components";
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
 * The Text component is a styled <span> element for rendering text in your React application.
 * It uses styled-system utilities to enable theme-driven customization and additional props for controlling appearance.
 *
 * @param {object} props - The props of the component.
 * @param {React.ReactNode} props.children - The content to display inside the Text component.
 * @param {...object} props.rest - Additional props for customizing the appearance (e.g., fontSize, color, lineHeight, etc.).
 * For a complete list of available props, refer to the styled-system documentation at {@link https://styled-system.com/api}.
 * @returns {JSX.Element} The Text component.
 */
const Text = styled.span`
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

export default Text;
