# Header Component

The Heading component is a versatile and theme-driven component for rendering heading elements h1 to h6 in your React application. It's designed to work with styled-components and styled-system, allowing you to easily apply consistent heading styles across your application based on your theme configuration.

## Features

- Supports all heading levels h1 to h6.
- Automatically applies default styles from the theme configuration based on the heading level.
- Customizable with additional props for font size, color, line height, letter spacing, font family, font weight, text alignment, and margin.
- Powered by styled-components and styled-system for theme-driven styling.

## Installation

Before using the Heading component, ensure that you have installed the required packages:

```bash
npm install styled-components styled-system
```

## Usage

First, make sure to wrap your application with the ThemeProvider from styled-components and pass your theme object as a prop.

```javascript
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const App = () => (
  <ThemeProvider theme={theme}>
    {/* Your application components */}
  </ThemeProvider>
);

export default App;
```

Next, import the Heading component in your component file:

```javascript
import Heading from "./components/Heading";
```

Use the Heading component in your application by specifying the level prop (default is 'h1') and providing the content as children:

```javascript
<Heading level="h1">This is an H1 Heading</Heading>
<Heading level="h2">This is an H2 Heading</Heading>
<Heading level="h3">This is an H3 Heading</Heading>
```

## Customizing Heading Styles

You can customize the appearance of the Heading component by passing additional props. These props correspond to the styled-system utility functions and will override the default styles from the theme configuration:

```javascript
<Heading
  level="h1"
  fontSize="3rem"
  color="blue"
  fontWeight="bold"
  textAlign="center"
  my={4}
>
  Custom H1 Heading
</Heading>
```

In this example, the custom H1 Heading will have a font size of 3rem, blue color, bold font weight, centered text alignment, and a margin of 4 units (based on your theme configuration) on the top and bottom.
For a complete list of customizable props, refer to the [styled-system documentation](https://styled-system.com/custom-props) documentation.

## Theme Configuration

The Heading component relies on a theme configuration object that defines default styles for font size, color, line height, letter spacing, font family, font weight, text alignment, and margin. Ensure that your theme object includes the necessary keys for these properties.

Example theme configuration:

```javascript
export const theme = {
  fontSizes: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.75rem',
    h4: '1.5rem',
    h5: '1.25rem',
    h6: '1rem',
  },
  colors: {
    text: '#333',
  },
  lineHeights: {
    heading: '1.2',
  },
  letterSpacing: {
    tight: '-0.05rem',
    normal: '0',
  },
  fontFamily: {
    primary: 'Roboto, sans-serif',
  },
  fontWeight: {
    normal: 500,
    bold: 600,
  },
  textAlign: {
    left: 'left',
    center: 'center',
    right:'right', },
space: { // Define your spacing scale here },
};
```

## PropTypes

The Heading component accepts the following props:

| Prop     | Type   | Default | Description                                                                                                                                                                                                    |
| -------- | ------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| level    | string | 'h1'    | The heading level to render, one of 'h1', 'h2', 'h3', 'h4', 'h5', or 'h6'.                                                                                                                                     |
| children | node   | -       | The content to display inside the heading element.                                                                                                                                                             |
| ...rest  | -      | -       | Additional props for customizing the appearance (e.g., fontSize, color, lineHeight, etc.). Refer to the [styled-system documentation](https://styled-system.com/table) for a complete list of available props. |

## Example

Here's a complete example of using the Heading component in a React application:

```javascript
import React from "react";
import { ThemeProvider } from "styled-components";
import Heading from "./components/Heading";

const theme = {
  /* Your theme configuration */
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Heading level="h1">This is an H1 Heading</Heading>
    <Heading level="h2">This is an H2 Heading</Heading>
    <Heading level="h3">This is an H3 Heading</Heading>
    <Heading
      level="h1"
      fontSize="3rem"
      color="blue"
      fontWeight="bold"
      textAlign="center"
      my={4}
    >
      Custom H1 Heading
    </Heading>
  </ThemeProvider>
);

export default App;
```

That's it! You now have a flexible and theme-driven Heading component for your React application. Remember to always keep your theme configuration up-to-date to ensure consistent styling across your application.
