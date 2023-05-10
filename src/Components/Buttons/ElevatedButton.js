import React from "react";
import styled from "styled-components";
import { commonButtonStyles } from "./ButtonBase.styled";

// Button base
const StyledButton = styled.div`
  ${commonButtonStyles}
  background: rgba(103, 80, 164, 0.05);
  width: fit-content;
  box-shadow: 0 1px 2px 0 ${(props) => props.theme.colors.transparentBlack4},
    0 1px 3px 1px ${(props) => props.theme.colors.transparentBlack3};

  &:hover {
    background-color: ${(props) => props.theme.colors.m3SourceTertiary};
    box-shadow: 0 1px 2px 0 ${(props) => props.theme.colors.transparentBlack4},
      0 2px 6px 2px ${(props) => props.theme.colors.transparentBlack3};
    align-items: flex-start;
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
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px 24px;
  align-items: center;
  justify-content: center;
  gap: 8;

  &:hover,
  &:active,
  &:focus {
    background-color: ${(props) => props.theme.colors.transparentSlateBlue};
    flex: 1;
    align-self: stretch;
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

  color: ${(props) => props.theme.colors.primary};

  &:disabled {
    color: ${(props) => props.theme.colors.onSurface};
    opacity: 0.38;
  }

  &:focus {
    color: ${(props) => props.theme.colors.m3SysLightPrimary};
  }
`;

const StyledIcon = styled.div`
  margin-right: 4px;
  width: 18px;
  height: 18px;
  color: ${(props) => props.theme.colors.primary};
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
