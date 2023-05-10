# Space Component

The Space component is a reusable and responsive styled div element for creating horizontal spacing between components in your React application. It uses styled-system utilities to enable theme-driven customization and additional props for controlling appearance and layout.

## Features:

Renders a semantic div element.
Uses styled-system utilities to allow customization of spacing, layout, typography, color, and flexbox.
Enables theme-driven styling with styled-components.
Provides a simple and flexible interface for creating horizontal spacing in your application.

## Installation:

Before using the Space component, ensure that you have installed the required packages:

```bash

npm install styled-components styled-system
```

## Usage:

Import the Space component in your component file:

```javascript
import Space from "./components/Space";
```

Use the Space component in your application by providing the desired size as the size prop:

```javascript
<Space size="20px" />
```

This will create a horizontal spacing of 20 pixels.

## Customizing Space Styles:

You can customize the appearance of the Space component by passing additional props. These props correspond to the styled-system utility functions and will override the default styles from the theme configuration:

```javascript
<Space size="20px" bg="blue" color="white" />
```

In this example, the customized Space will have a blue background color, white text color, and a horizontal spacing of 20 pixels.

For a complete list of customizable props, refer to the styled-system documentation.

## Theme Configuration:

The Space component relies on a theme configuration object that defines default styles for spacing, layout, typography, color, and flexbox. Ensure that your theme object includes the necessary keys for these properties.

## Example theme configuration:

```javascript
export const theme = {
  space: { small: "0.5rem", medium: "1rem", large: "1.5rem" },
  layout: { container: "960px" },
  typography: {
    fontSizes: { small: "0.8rem", medium: "1rem", large: "1.2rem" },
    fontFamily: { primary: "Arial, sans-serif" },
    fontWeight: { normal: 400, bold: 700 },
    lineHeight: { paragraph: "1.5" },
    letterSpacing: { tight: "-0.05rem", normal: "0" },
    textAlign: {
      left: "left",
      center: "center",
      right: "right",
      justify: "justify",
    },
  },
  colors: { text: "#333" },
  flexbox: {
    justifyContent: {
      start: "flex-start",
      center: "center",
      end: "flex-end",
      between: "space-between",
      around: "space-around",
    },
    alignItems: { start: "flex-start", center: "center", end: "flex-end" },
    flexWrap: { wrap: "wrap", nowrap: "nowrap" },
  },
};
```

## PropTypes:

| PropTypes | Default | Description                                      |
| --------- | ------- | ------------------------------------------------ |
| size      | 1rem    | The horizontal spacing size.                     |
| ...rest   |         | Additional props for customizing the appearance. |

## Additional props for customizing the appearance.

Refer to the styled-system documentation for a complete list of available props.

## Example usage:

```javascript
import React from "react";
import Space from "./components/Space";

function MyComponent() {
  return (
    <div>
      <h1>My Component</h1>
      <p>This is my component.</p>
      <Space size="2rem" />
      <button>Click me!</button>
    </div>
  );
}
```
