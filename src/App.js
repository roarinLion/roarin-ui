import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Themes/theme";
import Heading from "./Components/Typography/Heading";
import Text from "./Components/Typography/Text";
import Blockquote from "./Components/Typography/Blockquote";
import Code from "./Components/Typography/Code";

const App = () => (
  <ThemeProvider theme={theme}>
    <Heading level="h1">This is an H1 Heading</Heading>
    <Heading level="h3">This is an H2 Heading</Heading>
    <Heading level="h3">This is an H3 Heading</Heading>
    <Heading level="h4">This is an H4 Heading</Heading>
    <Heading level="h5">This is an H5 Heading</Heading>
    <Text>Here is some text...</Text>
    <Blockquote>Here is a blockquote...</Blockquote>
    <Code
      fontSize="1.2rem"
      color="white"
      bg="blue"
      fontWeight="bold"
      borderRadius={8}
    >
      const foo = 'bar';
    </Code>
  </ThemeProvider>
);

export default App;
