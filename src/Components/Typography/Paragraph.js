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
 * The Paragraph component is a styled <p> element for rendering paragraphs
 * in your React application. It uses styled-system utilities to allow
 * theme-driven customization and additional props for controlling appearance.
 *
 * @component
 * @example
 * // Use the Paragraph component with default theme styles
 * <Paragraph>
 *   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * </Paragraph>
 *
 * @example
 * // Customize the Paragraph component with additional props
 * <Paragraph
 *   fontSize="1.5rem"
 *   color="blue"
 *   fontWeight="bold"
 *   textAlign="justify"
 *   my={4}
 * >
 *   Customized paragraph with styled-system props.
 * </Paragraph>
 */
const Paragraph = styled.p`
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

export default Paragraph;
