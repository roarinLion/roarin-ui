import React from "react";
import styled from "styled-components";
import { commonButtonStyles } from "./ButtonBase.styled";

// Button base
const StyledButton = styled.div.attrs({ role: "button", tabindex: "0" })`
  ${commonButtonStyles}
  box-shadow: 0 1px 2px 0 ${(props) => props.theme.colors.transparentBlack4},
    0 1px 3px 1px ${(props) => props.theme.colors.transparentBlack3};
  color: ${(props) => props.theme.colors.tertiary};
  padding: 0;

  &:hover {
    background-color: ${(props) => props.theme.colors.tertiary};
    box-shadow: 0 1px 2px 0 ${(props) => props.theme.colors.transparentBlack4},
      0 2px 6px 2px ${(props) => props.theme.colors.transparentBlack3};
    align-items: flex-start;
    color: ${(props) => props.theme.colors.onTertiary};
    padding: 0;
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.transparentBlack};
  }

  &:active,
  &:focus {
    align-items: flex-start;
  }
`;

// Statelayer
const StateLayer = styled.div`
  height: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8;

  &:hover,
  &:active,
  &:focus {
    background-color: ${(props) => props.theme.colors.transparentSlateBlue};
    flex: 1;
    align-self: stretch;
    color: ${(props) => props.theme.colors.onTertiary};
  }
`;

// labelText
const LabelText = styled.p`
  text-align: center;
  letter-spacing: 0.1px;
  font-family: ${(props) => props.theme.fonts.labelLarge.family};
  font-size: ${(props) => props.theme.fonts.labelLarge.size};
  font-weight: ${(props) => props.theme.fonts.labelLarge.weight};
  line-height: ${(props) => props.theme.fonts.labelLarge.lineHeight};

  &:disabled {
    color: ${(props) => props.theme.colors.onSurface};
    opacity: 0.38;
  }

  &:focus {
    color: ${(props) => props.theme.colors.onTertiary};
  }
`;

const StyledIcon = styled.div`
  margin-right: 4px;
  width: 18px;
  height: 18px;
  color: inherit;
`;

const ElevatedButton = ({ icon }) => {
  const handleClick = (event) => {
    if (
      event.type === "click" ||
      (event.type === "keydown" && (event.key === "Enter" || event.key === " "))
    ) {
      // handle button click
    }
  };

  return (
    <StyledButton onClick={handleClick} onKeyDown={handleClick}>
      <StateLayer>
        {icon && <StyledIcon>{icon}</StyledIcon>}
        <LabelText>Elevated</LabelText>
      </StateLayer>
    </StyledButton>
  );
};

export default ElevatedButton;
