import React from "react";
import "draft-js/dist/Draft.css";
import TextEditor from "../QTextEditor/QTextEditor";
import PropTypes from "prop-types";

const RichTextEditor = (props) => {
  return (
    <TextEditor 
      {...props}
    />
  );
};

RichTextEditor.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.object, 
    PropTypes.string
  ])
};

export default RichTextEditor;