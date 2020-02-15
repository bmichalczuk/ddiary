import React from "react";
import {connect} from "react-redux"
import DiaryEntryForm from "../DiaryEntryForm/DiaryEntryForm";
import SubHeading from "../../components/SubHeading/SubHeading";
import {withRouter} from "react-router-dom";

const DiaryEditEntry = (props) => {
    if(props.auth === null || props.auth === undefined) {
        return null;
    }
    const {id} = props.match.params;
    let {timestamp, value} = props.auth.data.diary[id];
    const date = new Date(timestamp);
    const heading = date.toLocaleDateString();
    const entry = {timestamp,value};
    return (
        <div>
            <SubHeading>Edit {heading}</SubHeading>
            <DiaryEntryForm entry={entry} /> 
        </div>
    );
};

function mapStateToProps({auth}) {
    return {auth};
};

export default withRouter(connect(mapStateToProps)(DiaryEditEntry));