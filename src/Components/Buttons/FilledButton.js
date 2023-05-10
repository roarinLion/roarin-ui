import React from "react";
import styled from "styled-components";

// Button base
const StyledButton = styled.div.attrs({ role: "button", tabindex: "0" })`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:disabled {
    background-color: ${(props) => props.theme.colors.transparentBlack};
    padding: 10px 24px;
  }
`;

// StateLayer
const StateLayer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8;

  &:hover {
    background-color: ${(props) => props.theme.colors.transparentWhite2};
    box-shadow: 0 4px 4px 0 ${(props) => props.theme.colors.transparentBlack2};
    cursor: pointer;
  }

  &:active {
    background-color: ${(props) => props.theme.colors.transparentWhite};
    padding: 1px;
  }

  &:focus {
    background-color: ${(props) => props.theme.colors.transparentWhite};
    padding: 1px;
  }
`;

// LabelText
const LabelText = styled.p`
  color: ${(props) => props.theme.colors.onPrimary};
  text-align: center;
  letter-spacing: 0.1px;
  font-family: ${(props) => props.theme.fonts.LabelLarge.family};
  font-size: ${(props) => props.theme.fonts.LabelLarge.size};
  font-weight: ${(props) => props.theme.fonts.LabelLarge.weight};
  line-height: ${(props) => props.theme.fonts.LabelLarge.lineHeight};

  &:disabled {
    color: ${(props) => props.theme.colors.onSurface};
    opacity: 0.38;
  }
`;

// StyledIcon
const StyledIcon = styled.img`
  margin-right: 8px;
  width: 18px;
  height: 18px;
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
        {icon && <StyledIcon src={icon} alt="" />}{" "}
        {/* conditionally render icon */}
        <LabelText>Filled</LabelText>
      </StateLayer>
    </StyledButton>
  );
};

export default FilledButton;
