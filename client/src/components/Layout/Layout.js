import React from "react";
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                {children}
            </>
        </ThemeProvider>
    );
};

export default Layout