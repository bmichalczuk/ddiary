import React from "react";
import styled from "styled-components";
import {connect} from "react-redux"
import {convertFromRaw} from "draft-js";
import DiaryEntryForm from "../DiaryEntryForm/DiaryEntryForm";
import SubHeading from "../../components/SubHeading/SubHeading";


const DiaryEditEntry = (props) => {
    if(props.auth === null || props.auth === undefined) {
        return <p>terefer</p>;
    }
    const {id} = props.match.params;
    let {timestamp, editorState} = props.auth.data.diary[id];
    const { className} = props;
    const date = new Date(timestamp);
    const heading = date.toLocaleDateString();
    const entry = {timestamp, editorState: convertFromRaw(editorState)};
    return (
        <div>
            <SubHeading>Edit {heading}</SubHeading>
            <DiaryEntryForm entry={entry} /> 
        </div>
    );
};

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(DiaryEditEntry);