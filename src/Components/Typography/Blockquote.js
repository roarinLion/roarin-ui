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
  borders,
  borderColor,
} from "styled-system";

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

export default Blockquote;
