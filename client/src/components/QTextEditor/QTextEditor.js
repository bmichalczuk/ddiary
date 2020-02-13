import React, {useState,useRef}from "react"
import styled from "styled-components";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const StyledEditor = styled(ReactQuill)`
    .ql-editor {
        
    min-height: 20em;
    }
`;

const TextEditor = (props) => {
    const [text,setText] = useState("");
    const container = useRef(null);
    const handleChange = (value) => {
        console.log(value);
        setText(value);
    };


    return (
        <div>
            <StyledEditor value={text} onChange={handleChange} />
            <p>
                <h2>text:</h2>
                
                <StyledEditor modules={{toolbar: false}} value={text} readOnly={true} />
            </p>
        </div>
        
    );
};

export default TextEditor;