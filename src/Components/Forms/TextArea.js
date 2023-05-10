import React from "react";
import PropTypes from 'prop-types';
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

/**
 * TextArea component is a customizable textarea component with support for icons and labels.
 * It is built with styled-components and styled-system.
 *
 * @param {Object} props - Component props
 * @param {React.ReactElement} props.icon - An icon to display inside the input
 * @param {'left' | 'right'} props.iconPosition - Position of the icon relative to the input text
 * @param {string} props.label - A label to describe the input
 * @returns {React.ReactElement} - The TextArea component
 */
const StyledTextArea = styled.textarea`
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

/**
 * Label component is a simple styled-component that is used to render the label of the TextArea component.
 *
 * @returns {React.ReactElement} - The Label component
 */
const Label = styled.label`
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const TextArea = ({ icon, iconPosition, label, ...props }) => {
    return (
        <div>
            {label && <Label>{label}</Label>}
            <StyledTextArea {...props} />
        </div>
    );
};


TextArea.propTypes = {
    /**
     * An icon to display inside the input
     */
    icon: PropTypes.element,
    /**
     * Position of the icon relative to the input text
     */
    iconPosition: PropTypes.oneOf(['left', 'right']),
    /**
     * A label to describe the input
     */
    label: PropTypes.string,
};

export default TextArea;
