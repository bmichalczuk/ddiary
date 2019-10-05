import React from "react";
import styled from "styled-components";
import {connect} from "react-redux"
import {convertFromRaw} from "draft-js";
import DiaryEntryForm from "../DiaryEntryForm/DiaryEntryForm";

const DiaryEditEntry = (props) => {
    
    console.log(props.auth);
    if(props.auth === null || props.auth === undefined) {
        return <p>terefer</p>;
    }
    console.log(props.auth);
    
    const {id} = props.match.params;
    let {timestamp, editorState} = props.auth.data.diary[id];
  
    console.log(timestamp);
    console.log(editorState)
    

    const { className} = props;
    
    const date = new Date(timestamp);
    //const editorState = convertFromRaw(editorState);
    const heading = date.toLocaleDateString();
    const entry = {timestamp, editorState: convertFromRaw(editorState)};
    return (
        <div>
            terefere
            <DiaryEntryForm entry={entry} /> 
        </div>
        
    );
};

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(DiaryEditEntry);