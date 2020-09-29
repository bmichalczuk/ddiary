import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Button from "../Button/Button";

const ButtonLikeLink = (props) => {
    return <Button {...props} as={Link}>{props.children}</Button>;
};


const StyledButtonLikeLink = styled(ButtonLikeLink)`
    text-decoration: none;
`;

export default StyledButtonLikeLink;