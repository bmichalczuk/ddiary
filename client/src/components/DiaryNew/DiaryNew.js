import React from "react";
import DiaryEntryForm from "../../containers/DiaryEntryForm/DiaryEntryForm";
import styled from "styled-components";

const DiaryNew = ({className}) => {
    return (
        <section className={className}>
            <h2>Add new entry</h2>
            <DiaryEntryForm />
        </section>
    );
};

const StyledDiaryNew = styled(DiaryNew)`
    color: ${({theme: {secondaryColor}}) => secondaryColor};
    h2 {
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
`;


export default StyledDiaryNew;

