import React, {Component} from "react";
import {Editor, EditorState, RichUtils, getDefaultKeyBinding} from "draft-js";
import styled from "styled-components";
import "draft-js/dist/Draft.css";


const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: stretch;
  border: 1px solid #ddd;
  color: ${props => props.theme.secondaryColor};
  .DraftEditor-root {
    background-color: #fffef7;
    flex: 1;
    min-height: 300px;
    width: 100%;
    padding: 10px;
  }
  .blockquote {
    font-family: 'Hoefler Text', Georgia, serif;
    font-style: italic;
    border-left: solid #EEEEEE 5px;
    padding: 10px;
  }
`;

const blockStyles = (contentBlock) => {
  const type = contentBlock.getType();
  switch(type) {
    case "blockquote":
      return "blockquote";
    default: return null;
  };
};

class TextEditor extends Component {
  onChange = (editorState) => !this.props.readOnly && this.props.onChange("editorState", editorState);
  onFocus = (e) => {
    e.stopPropagation();
    this.refs.editor.focus();
  }
  toggleBlockType = (blockType) => {
    this.onChange(
      RichUtils.toggleBlockType(
        this.props.editorState,
        blockType
      )
    );
  }
  toggleInlineStyle = (inlineStyle) => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.props.editorState,
        inlineStyle
      )
    );
  }
  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }
  render() {
    if(this.props.editorState) {
      return (
        <EditorContainer onClick={this.onFocus}>
          {this.props.renderToolbar && 
          this.props.renderToolbar(
            this.toggleInlineStyle, 
            this.toggleBlockType, 
            this.props.editorState
          )}
          <Editor
            readOnly={this.props.readOnly}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={getDefaultKeyBinding}
            editorState={this.props.editorState}
            onChange={this.onChange}
            blockStyleFn={blockStyles}
            ref="editor"
            />
        </EditorContainer>
      );
    } return <div>Loading</div>;
    
  }
};

export default TextEditor;