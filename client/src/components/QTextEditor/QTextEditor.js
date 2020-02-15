import React, {useState,useRef}from "react"
import styled from "styled-components";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import PropTypes from "prop-types";

const StyledEditor = styled(ReactQuill)`
    .ql-editor {
        min-height: 20em;
    };
`;

const TextEditor = (props) => {
    const {value, onChange} = props;
    return (
            <StyledEditor {...props} value={value} onChange={onChange} />
    );
};

TextEditor.propTypes = {
    value: PropTypes.any.isRequired
};

export default TextEditor;