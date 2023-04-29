# Paragraph Component

The `Paragraph` component is a styled `<p>` element for rendering paragraphs in your React application. It leverages `styled-components` and `styled-system` utilities to enable theme-driven customization and additional props for controlling appearance.

## Features

- Renders a semantic `<p>` element.
- Uses `styled-system` utilities to allow customization of font size, color, line height, letter spacing, font family, font weight, text alignment, and margin.
- Enables theme-driven styling with `styled-components`.
- Provides a simple and flexible interface for rendering text in your application.

## Installation

Before using the `Paragraph` component, ensure that you have installed the required packages:

```bash
npm install styled-components styled-system
```

## Usage

Import the `Paragraph` component in your component file:

```javascript
import Paragraph from "./components/Paragraph";
```

Use the `Paragraph` component in your application by providing the content as children:

```javascript
<Paragraph>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
  bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
  commodo. Proin sodales pulvinar sic tempor.
</Paragraph>
```

## Customizing Paragraph Styles

You can customize the appearance of the `Paragraph` component by passing additional props. These props correspond to the `styled-system` utility functions and will override the default styles from the theme configuration:

```javascript
<Paragraph
  fontSize="1.5rem"
  color="blue"
  fontWeight="bold"
  textAlign="justify"
  my={4}
>
  Customized paragraph with styled-system props.
</Paragraph>
```

In this example, the customized paragraph will have a font size of 1.5rem, blue color, bold font weight, justified text alignment, and a margin of 4 units (based on your theme configuration) on the top and bottom. For a complete list of customizable props, refer to the [styled-system documentation](https://styled-system.com/custom-props) documentation.

## Theme Configuration

The `Paragraph` component relies on a theme configuration object that defines default styles for font size, color, line height, letter spacing, font family, font weight, text alignment, and margin. Ensure that your theme object includes the necessary keys for these properties.

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
};
```

## PropTypes

The Paragraph component accepts the following props:

| Prop     | Type | Default | Description                                                                                                                                                                                                  |
| -------- | ---- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| children | node | -       | The content to display inside the paragraph element.                                                                                                                                                         |
| ...rest  | -    | -       | Additional props for customizing the appearance (e.g., fontSize, color, lineHeight, etc.). Refer to the [styled-system documentation](https://styled-system.com/api) for a complete list of available props. |
