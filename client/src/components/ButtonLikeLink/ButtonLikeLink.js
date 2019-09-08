import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


const themes = {
    primary: {
        color: "#FFFFFF",
        background: "#089DD7",
        hoverColor: "#089DD7",
        hoverBackground: "#FFFFFF"
    },
    danger: {
        color: "white",
        background: "red",
        hoverColor: "yelow",
        hoverBackground: "purple"
    }
};

const ButtonLikeLink = styled(Link)`
        padding: .5em 1em;
        display: inline-flex;
        flex-wrap: nowrap;
        align-content: center;
        align-items: center;
        justify-content: space-around;
        border: 1px solid;
        border-radius: 10px;
        text-transform: uppercase;
        text-align: center;
        text-decoration: none;
        
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
        ${props => {
            return `
            @media (min-width: ${props.theme.breakpoint.medium}) {
            width: 100px;
            color: black;
            };
            `
            
        }}
        
`;



export default ButtonLikeLink;