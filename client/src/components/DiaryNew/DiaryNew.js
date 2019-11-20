import React from "react";
import DiaryEntryForm from "../../containers/DiaryEntryForm/DiaryEntryForm";
import styled from "styled-components";
import SubHeading from "../SubHeading/SubHeading";
import ArrowButton from "../ArrowButton/ArrowButton";
import VisuallyHidden from "../../shared/VisuallyHidden";
import {useHistory} from "react-router-dom";

const DiaryNew = ({className}) => {
    const history = useHistory();
    const goBack = () => history.goBack();
    return (
        <section className={className}>
            <ArrowButton  onClick={goBack} ontitle="Return to previous page"><VisuallyHidden>Return to previous page</VisuallyHidden></ArrowButton>
            <DiaryEntryForm />
        </section>
    );
};

const StyledDiaryNew = styled(DiaryNew)`
    color: ${({theme: {secondaryColor}}) => secondaryColor};
    max-width: 40em;
    margin: auto;
`;


export default StyledDiaryNew;

