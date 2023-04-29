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
