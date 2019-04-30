import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
    color: white;
    padding: .5em 1em;
    background: red;
    border: 1px solid red;
    text-transform: uppercase;
    :hover,
    :focus {
        cursor: pointer;
        color: red;
        background: white;
        transition: .3s;
    }
`;

export default StyledBtn;