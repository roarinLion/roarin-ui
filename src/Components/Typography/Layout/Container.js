import styled from "styled-components";
import PropTypes from "prop-types";
import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
} from "styled-system";

/**
 * The Container component is a reusable and responsive styled <div> element for
 * containing content in your React application. It uses styled-system utilities
 * to enable theme-driven customization and additional props for controlling
 * appearance and layout.
 *
 * @component
 * @example
 * // Use the Container component with default theme styles
 * <Container>
 *   <h1>Hello World!</h1>
 * </Container>
 *
 * @example
 * // Customize the Container component with additional props
 * <Container
 *   bg="blue"
 *   color="white"
 *   maxWidth="960px"
 *   mx="auto"
 *   p={4}
 * >
 *   Customized container with styled-system props.
 * </Container>
 */
const Container = styled.div`
  ${compose(space, layout, typography, color, flexbox)}
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth || "none"};
  margin: 0 auto;
`;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  ...space.propTypes,
  ...layout.propTypes,
  ...typography.propTypes,
  ...color.propTypes,
  ...flexbox.propTypes,
};

export default Container;
