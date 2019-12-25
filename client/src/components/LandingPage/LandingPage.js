import React from "react";
import styled from "styled-components";
import backgroundImage from "./landing-page.jpg";
import GoogleAuthLink from "../GoogleAuthLink/GoogleAuthLink";
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background: black;
    background-image: url(${backgroundImage});
    background-size: cover;
    color: white;
    padding-top: 5em;
`;

const LandingPage = () => {
    return (
        <Wrapper>
            <GoogleAuthLink />
        </Wrapper>
    );
};

export default LandingPage;