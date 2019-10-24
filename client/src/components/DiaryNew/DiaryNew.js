import React from "react";
import DiaryEntryForm from "../../containers/DiaryEntryForm/DiaryEntryForm";
import styled from "styled-components";
import SubHeading from "../SubHeading/SubHeading";

const DiaryNew = ({className}) => {
    return (
        <section className={className}>
            <SubHeading>Add new entry</SubHeading>
            <DiaryEntryForm />
        </section>
    );
};

const StyledDiaryNew = styled(DiaryNew)`
    color: ${({theme: {secondaryColor}}) => secondaryColor};
`;


export default StyledDiaryNew;

