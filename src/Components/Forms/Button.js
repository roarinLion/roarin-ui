import React from 'react';
import styled from 'styled-components';

// Common button styles
const Button = styled.button`
  // Add common button styles here
`;

// StateLayer
const StateLayer = styled.div`
  // Define default state style here

  &:hover {
    // Add your hovered state styles here
  }

  &:active {
    // Add your pressed state styles here
  }

  &:focus {
    // Add your focused state styles here
  }

  &:disabled {
    // Add your disabled state styles here
  }
`;

// LabelText
const LabelText = styled.span`
  // Add your label styles here
`;

// StyledIcon
const StyledIcon = styled.div`
  // Add your icon styles here
`;

// FilledButton
const FilledButton = styled(Button)`
  // Add your filled button styles here
`;

// OutlinedButton
const OutlinedButton = styled(Button)`
  // Add your outlined button styles here
`;

// TextButton
const TextButton = styled(Button)`
  // Add your text button styles here
`;

// ElevatedButton
const ElevatedButton = styled(Button)`
  // Add your elevated button styles here
`;

// TonalButton
const TonalButton = styled(Button)`
  // Add your tonal button styles here
`;

// Component for each button type
const ButtonComponent = ({ label, IconComponent, buttonType: ButtonType, ...props }) => (
  <ButtonType {...props}>
    <StateLayer>
      {IconComponent && <IconComponent />}
      <LabelText>{label}</LabelText>
    </StateLayer>
  </ButtonType>
);

export const FilledButtonComponent = (props) => <ButtonComponent buttonType={FilledButton} {...props} />
export const OutlinedButtonComponent = (props) => <ButtonComponent buttonType={OutlinedButton} {...props} />
export const TextButtonComponent = (props) => <ButtonComponent buttonType={TextButton} {...props} />
export const ElevatedButtonComponent = (props) => <ButtonComponent buttonType={ElevatedButton} {...props} />
export const TonalButtonComponent = (props) => <ButtonComponent buttonType={TonalButton} {...props} />
