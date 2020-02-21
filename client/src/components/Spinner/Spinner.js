import React from "react";
import styled from "styled-components";

const Spinner = (props) => <div {...props}></div>;

const StyledSpinner = styled(Spinner)`
        @keyframes spin {
                100% {
                        transform: rotate(360deg);
                }
        }
        width: ${props => props.size || "50px"};
        height: ${props => props.size || "50px"};
        color: ${({color, theme}) => theme[color] ? theme[color] : color }; 
        border-style: solid;              
        border-width: ${props => props.weight || "2px"};
        margin: ${props => props.margin || "0 4px"};
        border-radius: 100%;
        animation: spin 2s linear infinite;
        border-right-color: transparent;
        border-left-color: transparent;
`;

export default StyledSpinner;