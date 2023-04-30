# Grid Component

The Grid component is a reusable and responsive styled `<div>` element for creating grids in your React application. It uses the `grid` CSS property and styled-system utilities to enable theme-driven customization and additional props for controlling appearance and layout.

## Features

- Renders a semantic `<div>` element with the `display: grid` CSS property.
- Uses the `grid-template-columns` and `grid-gap` properties to allow customization of the grid layout.
- Enables theme-driven styling with styled-components.
- Provides a simple and flexible interface for creating grids in your application.

## Installation

Before using the Grid component, ensure that you have installed the required packages:

```bash
npm install styled-components styled-system
```

## Usage

Import the Grid component in your component file:

```javascript
import Grid from "./components/Grid";
```

Use the Grid component in your application by providing the content as children and the desired number of columns as the `columns` prop:

```javascript
<Grid columns={2}>
  <div>Item 1</div> <div>Item 2</div> <div>Item 3</div> <div>Item 4</div>
</Grid>
```

This will create a 2-column grid with 4 items.

You can also use the `repeat()` function in the `grid-template-columns` property to create grids with a variable number of columns:

```javascript
<Grid columns="repeat(3, 1fr)">
  {" "}
  <div>Item 1</div> <div>Item 2</div> <div>Item 3</div> <div>Item 4</div> <div>
    Item 5
  </div> <div>Item 6</div>{" "}
</Grid>
```

This will create a 3-column grid with 6 items.

## Customizing Grid Styles

You can customize the appearance of the Grid component by passing additional props. These props correspond to the styled-system utility functions and will override the default styles from the theme configuration:

```javascript
<Grid
  columns={3}
  gap={4}
  gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
>
  <div>Item 1</div> <div>Item 2</div> <div>Item 3</div> <div>Item 4</div>{" "}
  <div>Item 5</div> <div>Item 6</div> <div>Item 7</div> <div>Item 8</div>{" "}
  <div>Item 9</div>
</Grid>
```

In this example, the customized grid will have a 3-column layout, a gap of 4 units (based on your theme configuration) between items, and a variable width for the columns using the `repeat()` function and the `minmax()` function.

For a complete list of customizable props, refer to the [styled-system documentation](https://styled-system.com/api) documentation.

## Theme Configuration

The Grid component relies on a theme configuration object that defines default styles for spacing, layout, typography, color, and flexbox. Ensure that your theme object includes the necessary keys for these properties.

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
  grid: { gap: "1rem", columns: 12 },
};
```

## PropTypes

The Grid component accepts the following props:

| Prop     | Type          | Default | Description                                                  |
| -------- | ------------- | ------- | ------------------------------------------------------------ |
| children | ReactNode     |         | The content to display inside the grid.                      |
| columns  | string,number | 12      | The number of columns in the grid, or a `repeat()` function. |
| gap      | string,number | "1rem"  | The size of the gap between grid items.                      |
| ...rest  |               |         | Additional props for customizing the appearance.             |

Refer to the styled-system documentation for a complete list of available props.
