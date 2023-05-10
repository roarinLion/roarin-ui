import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, theme as commonTheme } from "./Themes/theme";
import Heading from "./Components/Typography/Heading";
import Text from "./Components/Typography/Text";
import Blockquote from "./Components/Typography/Blockquote";
import Code from "./Components/Typography/Code";
import Container from "./Components/Layout/Container";
import Grid from "./Components/Layout/Grid";
import Row from "./Components/Layout/Row";
import TextArea from "./Components/Forms/TextArea";
import Input from "./Components/Forms/Input";
import FilledButton from "./Components/Buttons/FilledButton";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const theme = isLightTheme
    ? { ...commonTheme, ...lightTheme }
    : { ...commonTheme, ...darkTheme };

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };
  return (
    <ThemeProvider theme={theme}>
      {/* The ThemeProvider component is used to provide the theme to all styled components in the application */}
      <Container maxWidth="1620px">
        <button onClick={toggleTheme}>Toggle theme</button>
        <FilledButton />
      </Container>
    </ThemeProvider>
  );
}

export default App;
