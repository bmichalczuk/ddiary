import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import Spinner from "../../components/Spinner/Spinner";
import LoginIcon from "../../Icons/login";
import LogoutIcon from "../../Icons/logout";
import VisuallyInvisible from "../../shared/VisuallyHidden";
import AppHeading from "./AppHeading";

export const AppHeader = (props) => {
    const renderAuthStatus = () => {
        switch(props.auth) {
            case null:
                return <Spinner />;
            case false: 
                return (
                        <a className="auth__link" title="Login with Google" href="auth/google">
                            <VisuallyInvisible>Login with Google</VisuallyInvisible> 
                            <LoginIcon />
                        </a>
                    );
            default: return (
                    <a className="auth__link" title="Logout" href="/api/logout">
                        <VisuallyInvisible>Logout</VisuallyInvisible> 
                        <LogoutIcon />
                    </a>
                );
        }   
    }
    return (
        <header className={props.className}>
            <AppHeading auth={props.auth} />
            <div className="auth">
                {renderAuthStatus() }
            </div>
        </header>
    );
};


const styledAppHeader = styled(AppHeader)`
    box-shadow: inset 0 -5px ${({theme: {fourthColor}})  => fourthColor};
    min-height: 5em;
    display: flex;
    justify-content: space-between;
    align-content: stretch;
    background-color: ${({theme: {secondaryColor}}) => secondaryColor};
    @media(min-width: ${({theme: {breakpoint}}) => breakpoint.medium}) {
        padding: .5em 5em;
    }
    @media(min-width: ${({theme: {breakpoint}}) => breakpoint.big}) {
    }
    svg {
        fill: #ffffff;
        height: 1em;
        width: auto;
    }
    .auth {
        display: flex;
        justify-content: center;
        align-items: center;
        .auth__link { 
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 1.5em;
            font-weight: bolder;
            color: ${({theme: {primaryColor}}) => primaryColor};
            transition: .4s;
            padding: .5em;
            :hover,
            :focus {
                background-color: ${({theme: {fourthColor}}) => fourthColor};
                color: ${({theme: {secondaryColor}}) => secondaryColor};
            }
        }
    }
`;

function mapStateToProps({auth}) {
    return {auth};
};

export default connect(mapStateToProps)(styledAppHeader);