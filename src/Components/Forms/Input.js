import React from "react";
import PropTypes from "prop-types";
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

const StyledInput = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
  background-color: #f7fafc;
  font-size: 1rem;
  width: 100%;
  line-height: 1.5;
  color: #2d3748;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    outline: none;
    border-color: #cbd5e0;
    box-shadow: 0 0 0 0.2rem rgba(66, 153, 225, 0.25);
  }
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

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  ${props => props.iconPosition === "left" && `flex-direction: row-reverse;`}
`;

const InputWrapper = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 0.5rem;
`;

const Input = ({ label, icon, iconPosition, ...props }) => {
    return (
        <InputWrapper>
            {label && <Label>{label}</Label>}
            <IconWrapper iconPosition={iconPosition}>
                {icon && iconPosition === "left" && <Icon>{icon}</Icon>}
                <StyledInput {...props} />
                {icon && iconPosition === "right" && <Icon>{icon}</Icon>}
            </IconWrapper>
        </InputWrapper>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(["left", "right"]),
};

Input.defaultProps = {
    iconPosition: "left",
};

export default Input;
