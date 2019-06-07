import React from "react";
import styled from "styled-components";

const Spinner = (props) => <div className={props.className}></div>;

const StyledSpinner = styled(Spinner)`

        @keyframes spin {
                100% {
                        transform: rotate(360deg);
                }
        
        }
        ${props => {
                return (
                        `width: ${props.size || "50px"};
                         height: ${props.size || "50px"};
                         color: ${props => props.color || "#ffffff"};
                        `
                );
                
        }}
        border: 2px solid;
        margin: 0 4px;
        border-radius: 100%;
        animation: spin 2s linear infinite;
        border-right-color: transparent;
        border-left-color: transparent;
`;

export default StyledSpinner;