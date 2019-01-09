import React from "react";
import {connect} from "react-redux";
import ddiarylogo from "./logo.png";
import styled from "styled-components";

export const AppHeader = (props) => {
    const renderAuthStatus = () => {
        switch(props.auth) {
            case null:
                return "Loading";
            case false: 
                return <a title="Login with Google" href="auth/google">Login with Google</a>;
            default: return <a href="/api/logout">Logout</a>;
        }
            
    }
    return (
        <header className={props.className}>
            <h1>
                <a href={props.auth ? "/diary" : "/"} title="DDiary">
                    <img src={ddiarylogo} alt="" />
                    <span>DDiary</span>
                </a>
            </h1>
            <div>
                {renderAuthStatus() }
            </div>
            
        </header>
    );
};

function mapDispatchToProps({auth}) {
    return {auth};
};
const styledAppHeader = styled(AppHeader)`
    display:flex;
    justify-content: space-between;
    align-content: stretch;
    font-family: "BebasNeue";
    h1 {
        margin-left: 2em;
    }
    span {
        position: absolute; 
        overflow: hidden; 
        clip: rect(0 0 0 0); 
        height: 1px; width: 1px; 
        margin: -1px; padding: 0; border: 0; 
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        a { 
            padding: 0 1em;
            display: flex;
            align-items: center;
            height: 100%;
            text-decoration: none;
            font-size: 1.2em;
            transition: .2s;
            padding-right: .5em;
            :hover,
            :focus {
                background-color: lightgrey;
                color: white;
            }
        }
    }


`;
export default connect(mapDispatchToProps)(styledAppHeader);