import styled from "styled-components";
import PropTypes from "prop-types";
import { compose, space, layout, grid } from "styled-system";

/**
 * The Grid component is a responsive and theme-driven styled <div> element for
 * creating grid layouts in your React application. It uses styled-system utilities
 * to enable theme-driven customization and additional props for controlling
 * appearance and layout.
 *
 * @component
 * @example
 * // Use the Grid component with default theme styles
 * <Grid>
 *   <div>1</div>
 *   <div>2</div>
 *   <div>3</div>
 * </Grid>
 *
 * @example
 * // Customize the Grid component with additional props
 * <Grid
 *   gridTemplateColumns="repeat(3, 1fr)"
 *   gridGap={4}
 * >
 *   <div>1</div>
 *   <div>2</div>
 *   <div>3</div>
 * </Grid>
 */
const Grid = styled.div`
  ${compose(space, layout, grid)}
  display: grid;
`;

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  ...space.propTypes,
  ...layout.propTypes,
  ...grid.propTypes,
};

export default Grid;
