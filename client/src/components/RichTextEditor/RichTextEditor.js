import React from "react";
import "draft-js/dist/Draft.css";
import TextEditor from "../QTextEditor/QTextEditor";
import PropTypes from "prop-types";


const RichTextEditor = (props) => {
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        
    ['blockquote'],
    [{ 'header': 1 }, { 'header': 2 },{ 'header': 3 }],            
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'size': ['small', false, 'large', 'huge'] }],  
    [{ 'color': [] }, { 'background': [] }],      
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                       
  ];
  return (
    <TextEditor 
      {...props}
      modules={
        {toolbar: toolbarOptions}
      }
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