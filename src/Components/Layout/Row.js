import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, layout, flexbox } from "styled-system";

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${space}
  ${layout}
  ${flexbox}
`;

/**
 * A reusable and responsive styled row element for creating horizontal layouts in your React application.
 *
 * @component
 * @example
 * <Row justifyContent="space-between" alignItems="center">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Row>
 */
const Row = ({ children, ...rest }) => {
  return <StyledRow {...rest}>{children}</StyledRow>;
};

Row.propTypes = {
  /**
   * The content to display inside the Row.
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional props for customizing the appearance.
   */
  ...space.propTypes,
  ...layout.propTypes,
  ...flexbox.propTypes,
};

export default Row;
