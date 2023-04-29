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
  borders,
  borderColor,
} from "styled-system";

/**
 * The Blockquote component is a styled <blockquote> element for rendering
 * a block quotation in your React application. It uses styled-system
 * utilities to allow theme-driven customization and additional props for
 * controlling appearance.
 *
 * @component
 * @example
 * // Use the Blockquote component with default theme styles
 * <Blockquote>
 *   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * </Blockquote>
 *
 * @example
 * // Customize the Blockquote component with additional props
 * <Blockquote
 *   fontSize="1.5rem"
 *   color="blue"
 *   fontWeight="bold"
 *   textAlign="justify"
 *   my={4}
 * >
 *   Customized blockquote with styled-system props.
 * </Blockquote>
 */
const Blockquote = styled.blockquote`
  ${compose(
    fontSize,
    color,
    lineHeight,
    letterSpacing,
    fontFamily,
    fontWeight,
    textAlign,
    space,
    borders,
    borderColor
  )}
  padding-left: 1rem;
  border-left: 4px solid;
  margin: 1rem 0;
`;

Blockquote.propTypes = {
  children: PropTypes.node.isRequired,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...space.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
};

export default Blockquote;
