import React from "react";
import styled from "styled-components";
import VisuallyHidden from "../../shared/VisuallyHidden";
import {Link} from "react-redux";
const ArrowButton = styled.button`
    color: ${({theme: {fourthColor}}) => fourthColor};
    width: 0;
    height: 0;
    border: solid;
    background: transparent;
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent;
    border-right: 50px solid red;
    border-left: transparent;
    position: relative;
    cursor: pointer;
    :before {
        content: "";
        color: ${({theme: {fourthColor}}) => fourthColor};
        position: absolute;
        top: 50%;
        transform: translateY(-50%) translateX(50%);
        width: 0;
        height: 0;
        border: solid;
        background: transparent;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-right: 40px solid ${({theme: {primaryColor}}) => primaryColor};
        border-left: transparent;
    }
`;



export default ArrowButton;