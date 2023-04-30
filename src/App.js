import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Themes/theme";
import Heading from "./Components/Typography/Heading";
import Text from "./Components/Typography/Text";
import Blockquote from "./Components/Typography/Blockquote";
import Code from "./Components/Typography/Code";
import Container from "./Components/Typography/Layout/Container";
import Grid from "./Components/Typography/Layout/Grid";

const App = () => (
  <ThemeProvider theme={theme}>
    <Container maxWidth="1620px">
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
      Use the Container component in your application by providing the content
      as children:
      <Container>
        <h1>Hello World!</h1>
      </Container>
      Centering Content Use the mx="auto" prop to center the container
      horizontally:
      <Container maxWidth="800px" mx="auto">
        <h1>Centered Heading</h1> <p>This content will be centered.</p>
      </Container>
      Full-Width Background Use the bg prop to set a full-width background color
      or image:
      <Container bg="blue" color="white" p={4}>
        <h1>Full-Width Background</h1>
        <p>This content will have a blue background.</p>
      </Container>
      Full-Height Container Use the vh (viewport height) unit with the minHeight
      prop to set a full-height container:
      <Container minHeight="100vh">
        <h1>Full-Height Container</h1>
        <p>This content will fill the entire viewport height.</p>
      </Container>
      Nested Containers Use nested Container components to create a layout with
      multiple content areas:
      <Container bg="blue" color="white" p={4}>
        <h1>Header Area</h1>
      </Container>
      <Container maxWidth="800px" mx="auto" p={4}>
        <h2>Content Area</h2>
        <p>This content will be contained within the second container.</p>
      </Container>
      <Container bg="gray" color="white" p={4}>
        <h3>Footer Area</h3>
      </Container>
      Fixed-Width Container Use the width prop to set a fixed width for the
      container:
      <Container width="600px">
        <h1>Fixed-Width Container</h1>
        <p>
          This content will be contained within a 600 pixel width container.
        </p>
      </Container>
      Responsive Layout Use responsive props to create a layout that adapts to
      different screen sizes:
      <Container
        display="flex"
        flexDirection={{ _: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <div>
          <h1>Responsive Layout</h1>
          <p>
            This content will be displayed in a column on small screens and a
            row on larger screens.
          </p>
        </div>
        <div>
          <img src="/image.png" alt="Example Image" />
        </div>
      </Container>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridGap={4}
        justifyContent="center"
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Grid>
    </Container>
  </ThemeProvider>
);

export default App;
