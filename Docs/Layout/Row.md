# Row Component

The Row component is a reusable and responsive styled <div> element for creating horizontal layouts in your React application. It uses styled-system utilities to enable theme-driven customization and additional props for controlling appearance and layout.

## Features

    Renders a semantic <div> element.
    Uses styled-system utilities to allow customization of spacing, layout, typography, color, and flexbox.
    Enables theme-driven styling with styled-components.
    Provides a simple and flexible interface for creating horizontal layouts in your application.

## Installation

Before using the Row component, ensure that you have installed the required packages:

```bash

npm install styled-components styled-system
```

## Usage

Import the Row component in your component file:

```javascript
import Row from "./components/Row";
```

Use the Row component in your application by providing the content as children:

```javascript
<Row>
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</Row>
```

This will create a row with 3 columns.

## Centering Content

Use the justifyContent prop to center the content horizontally:

```javascript
<Row justifyContent="center">
  <div>Centered Column</div>
</Row>
```

## Full-Width Background

Use the bg prop to set a full-width background color or image:

```javascript
<Row bg="blue" color="white" p={4}>
  <div>Full-Width Background</div>
</Row>
```

## Full-Height Row

Use the vh (viewport height) unit with the minHeight prop to set a full-height row:

```javascript
<Row minHeight="100vh">
  <div>Full-Height Row</div>
</Row>
```

## Nested Rows

Use nested Row components to create a layout with multiple content areas:

```javascript

<Row bg="blue" color="white" p={4}>
  <div>Header Area</div>
</Row>
<Row>
  <Row maxWidth="800px" mx="auto" p={4}>
    <div>Content Area</div>
  </Row>
</Row>
<Row bg="gray" color="white" p={4}>
  <div>Footer Area</div>
</Row>
```

## Fixed-Height Row

Use the height prop to set a fixed height for the row:

```javascript
<Row height="100px">
  <div>Fixed-Height Row</div>
</Row>
```

## Responsive Layout

Use responsive props to create a layout that adapts to different screen sizes:

```javascript
<Row
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
</Row>
```

These are just a few examples of how the Row component can be used in your application. The possibilities are endless with the flexibility provided by styled-system utilities and styled-components.
Customizing Row Styles

You can customize the appearance of the Row component by passing additional props. These props correspond to the styled-system utility functions and will override the default styles from the theme configuration:

```javascript
<Row bg="blue" color="white" maxWidth="960px" mx="auto" p={4}>
  Customized row with styled ChatGPT -system props.
</Row>
```

In this example, the customized row will have a blue background color, white text color, a maximum width of 960 pixels, centered horizontally, and a padding of 4 units (based on your theme configuration) on all sides.

For a complete list of customizable props, refer to the styled-system documentation.
Theme Configuration

The Row component relies on a theme configuration object that defines default styles for spacing, layout, typography, color, and flexbox. Ensure that your theme object includes the necessary keys for these properties.

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

## PropTypes

The Row component accepts the following props:

PropTypes Default Description
children React.ReactNode The content to display inside the Row.
...rest Additional props for customizing the appearance.

Refer to the styled-system documentation for a complete list of available props.
