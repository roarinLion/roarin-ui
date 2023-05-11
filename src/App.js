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
import OutlinedButton from "./Components/Buttons/OutlinedButton";
import { MdAddTask } from "react-icons/md";
import TonalButton from "./Components/Buttons/TonalButton";
import styled from "styled-components";
import ElevatedButton from "./Components/Buttons/ElevatedButton";
import TextButton from "./Components/Buttons/TextButton";

const ElevationOne = styled.div`
  box-shadow: ${(props) => props.theme.elevation.elevation1};
  padding: 20px;
  border-radius: 8px;
`;

const ElevationTwo = styled.div`
  box-shadow: ${(props) => props.theme.elevation.elevation2};
  padding: 20px;
  border-radius: 8px;
`;

const ElevationThree = styled.div`
  box-shadow: ${(props) => props.theme.elevation.elevation3};
  padding: 20px;
  border-radius: 8px;
`;

const ElevationFour = styled.div`
  box-shadow: ${(props) => props.theme.elevation.elevation4};
  padding: 20px;
  border-radius: 8px;
`;

const ElevationFive = styled.div`
  box-shadow: ${(props) => props.theme.elevation.elevation5};
  padding: 20px;
  border-radius: 8px;
`;

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
      <Container p={5} bg="background">
        <Container maxWidth="1620px">
          <br /> <br />
          <button onClick={toggleTheme}>Toggle theme</button>
          <br /> <br />
          <br /> <br />
          <ElevationOne>This is a component with elevation1</ElevationOne>
          <br />
          <ElevationTwo>This is a component with elevation2</ElevationTwo>
          <br />
          <ElevationThree>This is a component with elevation3</ElevationThree>
          <br />
          <ElevationFour>This is a component with elevation4</ElevationFour>
          <br />
          <ElevationFive>This is a component with elevation5</ElevationFive>
          <br /> <br /> <br /> <br />
          <FilledButton />
          <br />
          <FilledButton icon={<MdAddTask />} />
          <br />
          <OutlinedButton />
          <br />
          <OutlinedButton icon={<MdAddTask />} />
          <br />
          <TonalButton />
          <br />
          <TonalButton icon={<MdAddTask />} />
          <br />
          <br />
          <ElevatedButton />
          <br />
          <br />
          <ElevatedButton icon={<MdAddTask />} />
          <br />
          <br />
          <TextButton />
          <br />
          <br />
          <TextButton icon={<MdAddTask />} />
          <br />
          {/* The Container component provides a responsive container for all the UI elements */}
          <Heading level="h1" variant="displaySmall">
            This is an H1 Heading
          </Heading>
          <Heading level="h3">This is an H2 Heading</Heading>
          <Heading level="h3">This is an H3 Heading</Heading>
          <Heading level="h4">This is an H4 Heading</Heading>
          <Heading level="h5">This is an H5 Heading</Heading>
          {/* The Heading component provides a set of heading styles that can be customized */}
          <Text>Here is some text...</Text>
          {/* The Text component provides a basic text style */}
          <Blockquote>Here is a blockquote...</Blockquote>
          {/* The Blockquote component provides a blockquote style */}
          <Code
            fontSize="1.2rem"
            color="white"
            bg="blue"
            fontWeight="bold"
            borderRadius={8}
          >
            const foo = 'bar';
          </Code>
          {/* The Code component provides a code block style */}
          Use the Container component in your application by providing the
          content as children:
          {/* This is a text element */}
          <Container>
            <h1>Hello World!</h1>
          </Container>
          {/* The Container component can be used to contain arbitrary HTML elements */}
          Centering Content Use the mx="auto" prop to center the container
          horizontally:
          {/* This is a text element */}
          <Container maxWidth="800px" mx="auto">
            <h1>Centered Heading</h1> <p>This content will be centered.</p>
          </Container>
          {/* The mx="auto" prop centers the container horizontally */}
          Full-Width Background Use the bg prop to set a full-width background
          color or image:
          {/* This is a text element */}
          <Container bg="blue" color="white" p={4}>
            <h1>Full-Width Background</h1>
            <p>This content will have a blue background.</p>
          </Container>
          {/* The bg prop sets the background color */}
          Full-Height Container Use the vh (viewport height) unit with the
          minHeight prop to set a full-height container:
          {/* This is a text element */}
          <Container minHeight="100vh">
            <h1>Full-Height Container</h1>
            <p>This content will fill the entire viewport height.</p>
          </Container>
          <FilledButton />
          {/* The minHeight prop sets the height of the container to the viewport height */}
          Nested Containers Use nested Container components to create a layout
          with multiple content areas:
          {/* This is a text element */}
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
          {/* Nested Container components can be used to create layouts with multiple content areas */}
          Fixed-Width Container Use the width prop to set a fixed width for the
          container:
          {/* This is a text element */}
          <Container width="600px">
            <h1>Fixed-Width Container</h1>
            <p>
              This content will be contained within a 600 pixel width container.
            </p>
          </Container>
          {/* The width prop sets a fixed width for the container */}
          Responsive Layout Use responsive props to create a layout that adapts
          to different screen sizes:
          {/* This is a Container component with display="flex", flexDirection={{ _: "column", md: "row" }}, alignItems="center", and justifyContent="space-between" props */}
          <Container
            display="flex"
            flexDirection={{ _: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
          >
            <div>
              <h1>Responsive Layout</h1>
              <p>
                This content will be displayed in a column on small screens and
                a row on larger screens.
              </p>
            </div>
            <div>
              <img src="/image.png" alt="Example" />
            </div>
          </Container>
          {/* The responsive props are used to create a layout that adapts to different screen sizes */}
          <Grid
            gridTemplateColumns="repeat(3, 1fr)"
            gridGap={4}
            justifyContent="center"
          >
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Grid>
          {/* The Grid component provides a grid layout */}
          <Row bg="blue" color="white" p={4}>
            <div>Full-Width Background</div>
          </Row>
          {/* The Row component provides a full-width background */}
          <Row justifyContent="center">
            <div>Centered Column</div>
          </Row>
          {/* The Row component can be used to center content */}
          <Row minHeight="100vh">
            <div>Full-Height Row</div>
          </Row>
          {/* The Row component can be used to set the height of the row to the viewport height */}
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
          <Row height="100px">
            <div>Fixed-Height Row</div>
          </Row>
          {/* The Row component can be used to create layouts with multiple content areas */}
          <Row
            display="flex"
            flexDirection={{ _: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
          >
            <div>
              <h1>Responsive Layout</h1>
              <p>
                This content will be displayed in a column on small screens and
                a row on larger screens.
              </p>
            </div>
            <div>
              <img src="/image.png" alt="Example" />
            </div>
          </Row>
          <Input label="Email" icon={null} />
          <TextArea label="Description" icon={null} iconPosition="left" />
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;
