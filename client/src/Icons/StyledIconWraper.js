import React from "react";
import styled from "styled-components";

const IconWraper = (props) => {
    return <>{props.children}</>
};

const StyledIconWraper = styled(IconWraper)`
    svg {
        height: .9em;
        width: auto;
        margin-right: 3px;
        fill: blue;
    svg:hover {
        fill: yellow;
    }
`

export default StyledIconWraper;