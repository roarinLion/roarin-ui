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
  backgroundColor,
} from "styled-system";

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
    backgroundColor
  )}
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

export default Code;
