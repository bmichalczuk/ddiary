import React from "react";
import styled from "styled-components";
import {Editor, EditorState, convertFromRaw} from "draft-js"
export const DiaryEntry = ({entry}) => {
    const {timestamp} = entry;
    const date = new Date(timestamp);
    const editorState = convertFromRaw(entry.editorState);
    const heading = date.toLocaleDateString();
    return (
        
            <article>
                <h2>{heading}</h2>
                <Editor editorState={EditorState.createWithContent(editorState)} onChange={() => undefined} />
            </article>
    );
};

export default DiaryEntry;