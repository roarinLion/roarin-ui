# Blockquote Component

The `Blockquote` component is a versatile and theme-driven styled `<blockquote>` element for rendering a block quotation in your React application. It uses styled-system utilities to allow theme-driven customization and additional props for controlling appearance.

## Features

- Renders a semantic `<blockquote>` element.
- Uses styled-system utilities to allow customization of font size, color, line height, letter spacing, font family, font weight, text alignment, space, borders, and border color.
- Enables theme-driven styling with styled-components.
- Provides a simple and flexible interface for rendering block quotes in your application.

## Installation

Before using the `Blockquote` component, ensure that you have installed the required packages:

```bash



    npm install styled-components styled-system
```

## Usage

Import the `Blockquote` component in your component file:

```javascript
import Blockquote from "./components/Blockquote";
```

Use the `Blockquote` component in your application by providing the content as children:

```javascript
<Blockquote>
  {" "}
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
</Blockquote>
```

## Customizing Blockquote Styles

You can customize the appearance of the `Blockquote` component by passing additional props. These props correspond to the styled-system utility functions and will override the default styles from the theme configuration:

```javascript
<Blockquote
  fontSize="1.5rem"
  color="blue"
  fontWeight="bold"
  textAlign="justify"
  my={4}
>
  Customized blockquote with styled-system props.
</Blockquote>
```

In this example, the customized block quote will have a font size of 1.5rem, blue color, bold font weight, justified text alignment, and a margin of 4 units (based on your theme configuration) on the top and bottom.

For a complete list of customizable props, refer to the styled-system documentation.

## Theme Configuration

The `Blockquote` component relies on a theme configuration object that defines default styles for font size, color, line height, letter spacing, font family, font weight, text alignment, space, borders, and border color. Ensure that your theme object includes the necessary keys for these properties.

Example theme configuration:

```javascript
export const theme = {
  fontSizes: { small: "0.8rem", medium: "1rem", large: "1.2rem" },
  colors: { text: "#333" },
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
  borders: { thin: "1px solid", thick: "3px solid" },
  borderColor: { primary: "#333", secondary: "#999" },
};
```

## PropTypes

The Blockquote component accepts the following props:

| Prop     | Type              | Default | Description                                                   |
| -------- | ----------------- | ------- | ------------------------------------------------------------- |
| children | `React.ReactNode` | -       | The content to display inside the blockquote element.         |
| ...rest  | -                 | -       | Additional props for customizing the appearance of the quote. |
