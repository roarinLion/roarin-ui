# Code Component

The Code component is a versatile and theme-driven styled `<code>` element for rendering inline code in your React application. It uses styled-system utilities to enable theme-driven customization and additional props for controlling appearance.

## Features

- Renders a semantic `<code>` element.
- Uses styled-system utilities to allow customization of font size, color, line height, letter spacing, font family, font weight, text alignment, and background.
- Enables theme-driven styling with styled-components.
- Provides a simple and flexible interface for rendering inline code in your application.

## Installation

Before using the Code component, ensure that you have installed the required packages:

```bash
npm install styled-components styled-system
```

## Usage

Import the Code component in your component file:

```javascript
import Code from "./components/Code";
```

Use the Code component in your application by providing the content as children:

```javascript
<Code>const foo = 'bar';</Code>
```

## Customizing Code Styles

You can customize the appearance of the Code component by passing additional props. These props correspond to the styled-system utility functions and will override the default styles from the theme configuration:

```javascript
<Code
  fontSize="1.2rem"
  color="white"
  bg="blue"
  fontWeight="bold"
  borderRadius={8}
>
  {" "}
  const foo = 'bar';{" "}
</Code>
```

In this example, the customized code will have a font size of 1.2rem, white color, blue background, bold font weight, and a border radius of 8 pixels.

For a complete list of customizable props, refer to the [styled-system documentation](https://styled-system.com/custom-props) documentation.

## Theme Configuration

The Code component relies on a theme configuration object that defines default styles for font size, color, line height, letter spacing, font family, font weight, text alignment, and background. Ensure that your theme object includes the necessary keys for these properties.

Example theme configuration:

```javascript
export const theme = {
  fontSizes: { small: "0.8rem", medium: "1rem", large: "1.2rem" },
  colors: { text: "#333", bg: "#f9f9f9", code: "#e8e8e8" },
  lineHeights: { paragraph: "1.5" },
  letterSpacing: { tight: "-0.05rem", normal: "0" },
  fontFamily: { primary: "Arial, sans-serif" },
  fontWeight: { normal: 400, bold: 700 },
  textAlign: {
    left: "left",
    center: "center",
    right: "right",
    justify: "justify",
  },
  space: { small: "0.5rem", medium: "1rem", large: "1.5rem" },
  radii: { small: "4px", medium: "8px", large: "12px" },
};
```

## PropTypes

The Code component accepts the following props:PropTypeDefaultDescription

childrenReact.ReactNode-The content to display inside the Code component.

...rest--Additional props for customizing the appearance.

Refer to the [styled-system documentation](https://styled-system.com/api) for a complete list of available props.
