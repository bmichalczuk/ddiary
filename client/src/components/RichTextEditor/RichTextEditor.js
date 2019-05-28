import React, {Component} from "react";
import {Editor, EditorState, RichUtils, getDefaultKeyBinding} from "draft-js";
import styled from "styled-components";
import VisuallyHidden from "../../shared/VisuallyHidden";
import "draft-js/dist/Draft.css";


const EditorContainer = styled.div`
  display: flex;
  margin: 5px auto;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: stretch;
  max-width: 800px;
  border: 1px solid #ddd;
  .DraftEditor-root {
    background-color: #fffef7;
    flex: 1;
    overflow-y: scroll;
    height: 300px;
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

const Toolbar = styled.div`
  height: 2em;
  width: 100%;
  border-bottom: 1px solid #ddd;
  background-color: ${({theme}) => theme.primaryColor};
  display: flex;
  justify-content: left;
  align-items: stretch;
  padding: 0 .5em;
`;

class StyleBtn extends Component {
  constructor(props) {
    super(props);
  }
  toggleStyle = (e) => {
    e.preventDefault();
    this.props.toggleStyle(this.props.style);
  }
  onClick = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <button 
        onClick={this.onClick} 
        title={this.props.label} 
        className={this.props.className} 
        onMouseDown={this.toggleStyle} >
        {this.props.children}
      </button>
    );
  }
}

const StyledToolbarBtn = styled(StyleBtn)`
  background-color: ${props => props.active ? props.theme.thirdColor : props.theme.primaryColor };
  color: ${props => props.active && props.theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  width: 2em;
  border: none;
  :hover,
  :focus {
    transition: .3s;
    cursor: pointer;
    background-color: lightgray; 
  }
  .active-btn {
    background: red;
  }
`;

const ToolbarBtn = (props) => {
  return (
    <StyledToolbarBtn 
      className={props.className}
      title={props.label}
      toggleStyle={props.toggleStyle}
      style={props.style}
      active={props.active}
    >
      <VisuallyHidden>{props.label}</VisuallyHidden>
      {props.children}
    </StyledToolbarBtn>
  );
};

const BoldBtn = styled(ToolbarBtn)`
  font-weight: 1000;
`;

const UnderlineBtn = styled(ToolbarBtn)`
  text-decoration: underline;
`;

const ItalicBtn = styled(ToolbarBtn)`
  font-style: italic;
`;

const BlockQuoteBtn = styled(ToolbarBtn)`
  font-weight: bold;
`;

const HeadingBtn = styled(ToolbarBtn)`
  font-weight: bold;
  text-align: center;
`;

const blockStyles = (contentBlock) => {
  const type = contentBlock.getType();
  switch(type) {
    case "blockquote":
      return "blockquote";
    default: return null;
  };
};

const InlineStylesControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <> 
      <BoldBtn 
        label="Bold" 
        toggleStyle={props.toggleStyle}
        style="BOLD"
        active={currentStyle.has("BOLD")}
      >
        B
      </BoldBtn>
      <ItalicBtn
        label="Italic" 
        toggleStyle={props.toggleStyle}
        style="ITALIC"
        active={currentStyle.has("ITALIC")}
      >
        I
      </ItalicBtn>
      <UnderlineBtn
        label="Underline" 
        toggleStyle={props.toggleStyle}
        style="UNDERLINE"
        active={currentStyle.has("UNDERLINE")}
      >
      U
      </UnderlineBtn>
    </>
  );
};

const BlockStylesControls = (props) => {
  const {editorState} = props;
        const selection = editorState.getSelection();
        const blockType = editorState
          .getCurrentContent()
          .getBlockForKey(selection.getStartKey())
          .getType();

  return (
    <>
      <BlockQuoteBtn
        label="Blockquote"
        toggleStyle={props.toggleStyle}
        style="blockquote"
        active={blockType === "blockquote"}
      >
        ""
      </BlockQuoteBtn>
      <HeadingBtn
        label="heading level one"
        toggleStyle={props.toggleStyle}
        style="header-one"
        active={blockType === "header-one"}
      >
        H1
      </HeadingBtn>
      <HeadingBtn
        label="heading level two"
        toggleStyle={props.toggleStyle}
        style="header-two"
        active={blockType === "header-two"}
      >
        H2
      </HeadingBtn>
      <HeadingBtn
        label="heading level three"
        toggleStyle={props.toggleStyle}
        style="header-three"
        active={blockType === "header-three"}
      >
        H3
      </HeadingBtn>
      <ToolbarBtn
         label="Unordered list"
         toggleStyle={props.toggleStyle}
         style="unordered-list-item"
         active={blockType === "unordered-list-item"}
      >
        UL
      </ToolbarBtn>
      <ToolbarBtn
         label="Ordered list"
         toggleStyle={props.toggleStyle}
         style="ordered-list-item"
         active={blockType === "ordered-list-item"}
      >
        OL
      </ToolbarBtn>
    </>
  );
};


class RichTextEditor extends Component {
  onChange = (editorState) => this.props.onChange("editorState", editorState);
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
          <Toolbar>
            <InlineStylesControls toggleStyle={this.toggleInlineStyle} editorState={this.props.editorState}/>
            <BlockStylesControls toggleStyle={this.toggleBlockType} editorState={this.props.editorState} />
          </Toolbar>
          <Editor
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

export default RichTextEditor;