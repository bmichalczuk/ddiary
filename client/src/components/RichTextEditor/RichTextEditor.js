import React from "react";
import "draft-js/dist/Draft.css";
import TextEditor from "../TextEditor/TextEditor";
import Toolbar from "./RichTextEditorToolbar";

const RichTextEditor = (props) => {
  const {editorState} = props;
  const renderToolbar = (toggleInlineStyle, toggleBlockType, editorState) => (
    <Toolbar 
      editorState={editorState} 
      toggleBlockType={toggleBlockType} 
      toggleInlineStyle={toggleInlineStyle} 
    />
  );
  return (
    <TextEditor 
          {...props}
          editorState={editorState}
          renderToolbar={renderToolbar}
        />
  );
}


export default RichTextEditor;