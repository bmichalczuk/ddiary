import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ddiarylogo from "./logo-white.png";
import VisuallyHidden from "../../shared/VisuallyHidden";

const AppHeading = ({auth, className, ...restOfProps}) => {
    return (
        <h1 className={className} {...restOfProps}>
            <a href={auth ? "/diary" : "/"} title="DDiary">
                <img className={className} src={ddiarylogo} alt="" />
                <VisuallyHidden>DDiary</VisuallyHidden>
            </a>
        </h1>
    );
};

AppHeading.propTypes = {
    auth: PropTypes.isRequired
};


const StyledAppHeading = styled(AppHeading)`
        margin-left: 1em;
        display: flex;
        align-items: center;
        img {
            height: 1.5em;
            width: auto;
        }
    }
`;



export default StyledAppHeading

