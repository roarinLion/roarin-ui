import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Themes/theme";
import Heading from "./Components/Typography/Heading";

const App = () => (
  <ThemeProvider theme={theme}>
    <Heading level="h1">This is an H1 Heading</Heading>
    <Heading level="h3">This is an H2 Heading</Heading>
    <Heading level="h3">This is an H3 Heading</Heading>
    <Heading level="h4">This is an H4 Heading</Heading>
    <Heading level="h5">This is an H5 Heading</Heading>
  </ThemeProvider>
);

export default App;
