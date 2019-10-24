import React from "react";
import styled from "styled-components";

const SubHeading = (props) => {
    return (
        <h2 {...props}>{props.children}</h2>
    );
};

const StyledSubheading = styled(SubHeading)`
    text-align: center; 
    font-weight: bold;
    margin-bottom: 10px;
`;

export default StyledSubheading;