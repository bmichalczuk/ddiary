import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        line-height: 1.5;
        margin: 0;
        padding: 0;
    }

    .visually-hidden {
        position: absolute; 
        overflow: hidden; 
        clip: rect(0 0 0 0); 
        height: 1px; width: 1px; 
        margin: -1px; padding: 0; border: 0; 
    }
    @font-face {
    font-family: "Roboto";
    src: local("Roboto Regular"), url("./fonts/Robotto/roboto-regular-webfont.woff") format("woff");
    }
    @font-face {
    font-family: "BebasNeue";
    src: url("./fonts/BebasNeue/bebasneue_regular-webfont.woff") format("woff");
    }
`;

export default GlobalStyles;