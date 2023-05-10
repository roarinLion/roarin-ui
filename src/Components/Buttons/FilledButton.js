import React from "react";
import styled from "styled-components";
import { StyledIcon } from "./Icon.styled";
import { commonButtonStyles } from "./ButtonBase.styled";

// Button base
const StyledButton = styled.div`
  ${commonButtonStyles}
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 100px;

  &:disabled {
    background-color: ${(props) => props.theme.colors.transparentBlack};
    padding: 0px 24px;
  }
`;

// Statelayer
const StateLayer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px 24px;
  align-items: center;
  justify-content: center;
  gap: 8;

  &:hover {
    background-color: ${(props) => props.theme.colors.transparentWhite2};
    box-shadow: 0 4px 4px 0 ${(props) => props.theme.colors.transparentBlack2};
    cursor: pointer;
  }

  &:active,
  &:focus {
    background-color: ${(props) => props.theme.colors.transparentWhite};
  }
`;

// labelText
const LabelText = styled.p`
  color: ${(props) => props.theme.colors.onPrimary};
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
`;

const FilledButton = ({ icon }) => {
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
        <LabelText>Filled</LabelText>
      </StateLayer>
    </StyledButton>
  );
};

export default FilledButton;
