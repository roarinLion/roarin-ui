import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space } from "styled-system";

const SpaceBox = styled.div`
  ${space}
`;

const Space = ({ className, ...rest }) => {
    return <SpaceBox className={className} {...rest} />;
};

Space.propTypes = {
    className: PropTypes.string,
    ...space.propTypes,
};

export default Space;
