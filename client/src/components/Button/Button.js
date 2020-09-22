import React from "react";
import styled from "styled-components";
import Spinner from "../Spinner/Spinner";
import propTypes from "prop-types";
import btnThemes from "../../shared/btnThemes";


const StyledButton = styled.button`
        padding: 0.5em 1em;
        font-size: 1em;
        display: ${props => props.block ? "flex" : "inline-flex"};
        flex-wrap: nowrap;
        align-content: center;
        align-items: center;
        justify-content: space-around;
        border: 1px solid;
        border-radius: 10px;
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
        letter-spacing: 1px;
        :hover,
        :focus {
            cursor: pointer;
            transition: .3s;
        }
        ${ props => {
            const type = props.btnTheme ? props.btnTheme : "primary";
            const {color, background, hoverColor, hoverBackground} = btnThemes[type];
            return `
                color: ${color};
                background: ${background};
                :hover,
                :focus {
                    transition: .3s;
                    color: ${!props.disabled && hoverColor};
                    background: ${!props.disabled && hoverBackground};
         
                }

            `;
        }}
`;

const Btn = (props) => {
        return (
        <StyledButton {...props}>
            {props.children}
            {props.loading && <Spinner size="15px"/>}
        </StyledButton>
        );
};


export default Btn;