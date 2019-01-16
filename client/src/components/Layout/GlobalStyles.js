import {createGlobalStyle} from "styled-components";
import Roboto from "./fonts/Robotto/roboto-regular-webfont.woff";
import BebasNeue from "./fonts/BebasNeue/bebasneue_regular-webfont.woff";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        line-height: 1.5;
        margin: 0;
        padding: 0;
    }

    @font-face {
    font-family: "Roboto";
    src: url(${Roboto}) format("woff");
    }
    @font-face {
    font-family: "BebasNeue";
    src: url(${BebasNeue}) format("woff");
    }
    body {
        font-family: ${props => props.theme.textFont};
        background-color: ${props => props.theme.primaryColor};
        color: ${props => props.theme.primaryColor};
    }
`;

export default GlobalStyles;