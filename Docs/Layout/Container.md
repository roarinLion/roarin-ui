# Container Component

The Container component is a reusable and responsive styled `<div>` element for containing content in your React application. It uses styled-system utilities to enable theme-driven customization and additional props for controlling appearance and layout.

## Features

- Renders a semantic `<div>` element.
- Uses styled-system utilities to allow customization of spacing, layout, typography, color, and flexbox.
- Enables theme-driven styling with styled-components.
- Provides a simple and flexible interface for containing content in your application.

## Installation

Before using the Container component, ensure that you have installed the required packages:

```bash
    npm install styled-components styled-system
```

## Usage

Import the Container component in your component file:

```javascript
import Container from "./components/Container";
```

Use the Container component in your application by providing the content as children:

```javascript
<Container>
  <h1>Hello World!</h1>
</Container>
```

#### Centering Content

Use the `mx="auto"` prop to center the container horizontally:

```javascript
<Container maxWidth="800px" mx="auto">
  {" "}
  <h1>Centered Heading</h1> <p>This content will be centered.</p>{" "}
</Container>
```

#### Full-Width Background

Use the `bg` prop to set a full-width background color or image:

```javascript
<Container bg="blue" color="white" p={4}>
  {" "}
  <h1>Full-Width Background</h1> <p>
    This content will have a blue background.
  </p>{" "}
</Container>
```

#### Full-Height Container

Use the `vh` (viewport height) unit with the `minHeight` prop to set a full-height container:

```javascript
<Container minHeight="100vh">
  {" "}
  <h1>Full-Height Container</h1> <p>
    This content will fill the entire viewport height.
  </p>{" "}
</Container>
```

#### Nested Containers

Use nested Container components to create a layout with multiple content areas:

```javascript
    <Container bg="blue" color="white" p={4}> <h1>Header Area</h1> </Container> <Container maxWidth="800px" mx="auto" p={4}> <h2>Content Area</h2> <p>This content will be contained within the second container.</p> </Container> <Container bg="gray" color="white" p={4}> <h3>Footer Area</h3>
    </Container>
```

#### Fixed-Width Container

Use the `width` prop to set a fixed width for the container:

```javascript
<Container width="600px">
  <h1>Fixed-Width Container</h1>
  <p>This content will be contained within a 600 pixel width container.</p>
</Container>
```

#### Responsive Layout

Use responsive props to create a layout that adapts to different screen sizes:

```javascript
<Container
  display="flex"
  flexDirection={{ _: "column", md: "row" }}
  alignItems="center"
  justifyContent="space-between"
>
  <div>
    <h1>Responsive Layout</h1>
    <p>
      This content will be displayed in a column on small screens and a row on
      larger screens.
    </p>
  </div>
  <div>
    <img src="/image.png" alt="Example Image" />
  </div>
</Container>
```

These are just a few examples of how the Container component can be used in your application. The possibilities are endless with the flexibility provided by styled-system utilities and styled-components.

## Customizing Container Styles

You can customize the appearance of the Container component by passing additional props. These props correspond to the styled-system utility functions and will override the default styles from the theme configuration:

```javascript
<Container bg="blue" color="white" maxWidth="960px" mx="auto" p={4}>
  Customized container with styled-system props.
</Container>
```

In this example, the customized container will have a blue background color, white text color, a maximum width of 960 pixels, centered horizontally, and a padding of 4 units (based on your theme configuration) on all sides.

For a complete list of customizable props, refer to the [styled-system documentation](https://styled-system.com/api) documentation.

## Theme Configuration

The Container component relies on a theme configuration object that defines default styles for spacing, layout, typography, color, and flexbox. Ensure that your theme object includes the necessary keys for these properties.

Example theme configuration:

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

## PropTypes

The Container component accepts the following props:PropTypeDefaultDescription

childrenReact.ReactNode-The content to display inside the Container.

...rest--Additional props for customizing the appearance.

Refer to the [styled-system documentation](https://styled-system.com/api) for a complete list of available props.
