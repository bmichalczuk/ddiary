import React from "react";
import styled from "styled-components";

const IconWraper = (props) => {
    return <span {...props}>{props.children}</span>
};

const StyledIconWraper = styled(IconWraper)`
    svg {
        height: 1em;
        width: auto;
        margin-right: 3px;
    }
`

export default StyledIconWraper;