import React from "react";
import DiaryEntryForm from "../../containers/DiaryEntryForm/DiaryEntryForm";
import styled from "styled-components";
import SubHeading from "../SubHeading/SubHeading";
import {withRouter} from "react-router-dom";
import QTextEditor from "../QTextEditor/QTextEditor";
const DiaryNew = ({className}) => {
    return (
        <section className={className}>
            <QTextEditor></QTextEditor>
            <SubHeading>Add new entry</SubHeading>
            <DiaryEntryForm />
        </section>
    );
};

const StyledDiaryNew = styled(DiaryNew)`
    color: ${({theme: {secondaryColor}}) => secondaryColor};
    max-width: 40em;
    margin: auto;
`;


export default withRouter(StyledDiaryNew);

