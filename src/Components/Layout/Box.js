/**

    The Box component is a reusable and customizable styled <div> element
    that uses styled-system APIs for easy customization.
    @component
    @param {object} props - The component props.
    @param {string} [props.bg] - The background color.
    @param {string} [props.color] - The text color.
    @param {string} [props.width] - The width.
    @param {string} [props.height] - The height.
    @param {string} [props.minWidth] - The minimum width.
    @param {string} [props.maxWidth] - The maximum width.
    @param {string} [props.minHeight] - The minimum height.
    @param {string} [props.maxHeight] - The maximum height.
    @param {string} [props.display] - The display value.
    @param {string} [props.flex] - The flex value.
    @param {string} [props.flexDirection] - The flex direction value.
    @param {string} [props.flexWrap] - The flex wrap value.
    @param {string} [props.justifyContent] - The justify content value.
    @param {string} [props.alignItems] - The align items value.
    @param {string} [props.alignContent] - The align content value.
    @param {string} [props.gridGap] - The grid gap value.
    @param {string} [props.gridTemplateColumns] - The grid template columns value.
    @param {string} [props.gridTemplateRows] - The grid template rows value.
    @param {string} [props.gridTemplateAreas] - The grid template areas value.
    @param {string} [props.gridArea] - The grid area value.
    @param {string} [props.position] - The position value.
    @param {string} [props.top] - The top value.
    @param {string} [props.right] - The right value.
    @param {string} [props.bottom] - The bottom value.
    @param {string} [props.left] - The left value.
    @param {string} [props.zIndex] - The z-index value.
    @param {string} [props.border] - The border value.
    @param {string} [props.borderTop] - The border top value.
    @param {string} [props.borderRight] - The border right value.
    @param {string} [props.borderBottom] - The border bottom value.
    @param {string} [props.borderLeft] - The border left value.
    @param {string} [props.borderColor] - The border color value.
    @param {string} [props.borderRadius] - The border radius value.
    @param {string} [props.fontSize] - The font size value.
    @param {string} [props.fontFamily] - The font family value.
    @param {string} [props.fontWeight] - The font weight value.
    @param {string} [props.lineHeight] - The line height value.
    @param {string} [props.letterSpacing] - The letter spacing value.
    @param {string} [props.textAlign] - The text align value.
    @param {string} [props.textDecoration] - The text decoration value.
    @param {string} [props.textTransform] - The text transform value.
    @param {string} [props.color] - The color value.
    @param {string} [props.opacity] - The opacity value.
    @param {string} [props.boxShadow] - The box shadow value.
**/

import React from "react";
import styled from "styled-components";
import {
    space,
    layout,
    typography,
    color,
    flexbox,
    border,
    background,
    position,
    shadow,
} from "styled-system";

const StyledBox = styled.div`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${flexbox}
  ${border}
  ${background}
  ${position}
  ${shadow}
`;

const Box = (props) => {
    return <StyledBox {...props} />;
};

export default Box;
