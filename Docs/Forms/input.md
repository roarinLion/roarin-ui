# Input

The Input component is a customizable and reusable input element with support for icons and labels. It uses styled-system APIs for easy customization.
Usage

To use the Input component, simply import it and use it like any other React component. Here's an example of how to use it:

```jsx
import React from "react";
import Input from "./Input";

function App() {
  return (
    <div>
      <Input placeholder="Enter your name" />
    </div>
  );
}

export default App;
```

## Props

The Input component supports the following props:
icon

Type: React.ReactNode

An icon to display in the input field. It can be any valid React node.
iconPosition

Type: string

The position of the icon in the input field. Can be either 'left' or 'right'.
label

Type: string

A label for the input field.
placeholder

Type: string

A placeholder text to display in the input field.
value

Type: string

The current value of the input field.
onChange

Type: function

A callback function to handle changes to the input field.
Styling

The Input component uses styled-system APIs for easy customization. It supports the following style props:
space
layout
typography
color
flexbox
border
background
position
shadow

To use any of these style props, simply pass them as props to the Input component.

## Example

Here's an example of using the Input component with a label and an icon:

```jsx
import React from "react";
import Input from "./Input";
import { FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div>
      <Input label="Email" icon={<FaEnvelope />} />
    </div>
  );
}

export default App;
```

This will display an input field with a label "Email" and an envelope icon on the left side of the input field.
