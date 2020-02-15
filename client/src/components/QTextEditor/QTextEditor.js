import React, {useState,useRef}from "react"
import styled from "styled-components";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import PropTypes from "prop-types";



const TextEditor = (props) => {
    const {value, onChange} = props;
    const handleChange = value => onChange && onChange("value", value);
    return (
        <ReactQuill {...props} value={value} onChange={handleChange} />
    );
};
const StyledTextEditor = styled(TextEditor)`
    .ql-editor {
        min-height: 20em;
    };
`;
/*TextEditor.propTypes = {
    value: PropTypes.any.isRequired
};*/

export default StyledTextEditor;