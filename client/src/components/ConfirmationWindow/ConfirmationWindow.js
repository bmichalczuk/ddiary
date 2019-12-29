import React from "react";
import styled from "styled-components";

const BackgroundCover = styled.div`
    position: fixed;
    z-index: 9999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(33,33,33,.9);


`;
const ModalBox = styled.div`
    padding: 2em;
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    background: ${props => props.theme.primaryColor};
    text-align: center;
    @media(min-width: ${({theme}) => theme.breakpoint.big}) {
        max-width: 50%;
        margin: auto;
    }
`;

const ConfirmationWindow = ({cancel, children}) => {
    const stopPropagation = e => e.stopPropagation();
    return (
        <BackgroundCover onClick={cancel}>
            <ModalBox onClick={stopPropagation}>
                {children}

            </ModalBox>
        </BackgroundCover>
    );

};



export default ConfirmationWindow;