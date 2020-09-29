import React from "react";
import styled from "styled-components";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import btnThemes from "../../shared/btnThemes";

const StyledButton = styled.button`
        padding: 0.5em 1em;
        font-size: 1em;
        display: ${({block}) => block ? "flex" : "inline-flex"};
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
        ${ ({disabled, btnTheme}) => {
            const {color, background, hoverColor, hoverBackground} = btnThemes[btnTheme];
            return `
                color: ${color};
                background: ${background};
                :hover,
                :focus {
                    transition: .3s;
                    color: ${!disabled && hoverColor};
                    background: ${!disabled && hoverBackground};
                }

            `;
        }}
`;

const Btn = ({btnTheme = "primary", children, loading = false, block = "false", ...rest}) => {
        const props = {block, children, loading, btnTheme, ...rest};
        return (
            <StyledButton {...props}>
                {children}
                {loading && <Spinner size="15px"/>}
            </StyledButton>
    );
};

Btn.propTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    btnTheme: PropTypes.string.isRequired,
    block: PropTypes.string
};


export default Btn;