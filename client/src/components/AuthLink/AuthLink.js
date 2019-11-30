import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AuthLink = ({children, href, icon, className}) => {
    return (
        <a 
            className={className}
            title={children} 
            href={href}>
            <img src={icon} alt=""/>
            <span>{children}</span>
        </a>
    );
};


AuthLink.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

const StyledAuthLink = styled(AuthLink)`
    background-color: ${props => props.bgColor || "$ffffff"};
    color: ${props => props.color || "inherit"};
    font-size: 1.5em;
    display: inline-flex;
    flex-wrap: nowrap;
    width: 13em;
    justify-content: space-around;
    align-content: center;
    border-radius: 3em;
    padding: .5em .2em;
    height: 2.5em; 
    text-decoration: none;
    transition: .2s;
    
    margin: 2em auto;
    img {
        flex: 1;
        max-height: 1.5em;
        width: auto;
        margin-right: 5px;
    }
    span {
        flex: 1 auto;
    }
    :hover,
    :focus {
        filter: brightness(125%);
    }
`;



export default StyledAuthLink;