import React from "react";
import styled from "styled-components";
import Spinner from "../Spinner/Spinner";

const themes = {
    primary: {
        color: "#FFFFFF",
        background: "#089DD7",
        hoverColor: "#089DD7",
        hoverBackground: "#FFFFFF"
    },
    danger: {
        color: "#FFFFFF",
        background: "#f91b07",
        hoverColor: "#f91b07",
        hoverBackground: "#FFFFFF"
    }
};

const StyledButton = styled.button`
        padding: 1em 1.5em;
        display: flex;
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
            const {color, background, hoverColor, hoverBackground} = themes[type];
            return `
                color: ${color};
                background: ${background};
                :hover,
                :focus {
                    color: ${!props.disabled && hoverColor};
                    background: ${!props.disabled && hoverBackground};
                }
            `;
        }}
`;

const Btn = (props) => {
    if (!props.loading) {
        return <StyledButton {...props}>{props.children}</StyledButton>;
    }
    return <StyledButton {...props}><span>{props.children}</span><Spinner size="15px"/></StyledButton>;
};


export default Btn;