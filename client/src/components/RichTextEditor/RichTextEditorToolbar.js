import React, {Component} from "react";
import styled from "styled-components";
import VisuallyHidden from "../../shared/VisuallyHidden";
const Toolbar = styled.div`
  width: 100%;
  border-bottom: 1px solid #ddd;
  background-color: ${({theme}) => theme.primaryColor};
  display: flex;
  justify-content: left;
  padding: .2em .5em;
`;

class StyleBtn extends Component {
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
  width: 2em;
  padding: 5px;
  margin: 0 3px;
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

const StyledToolbar = ({toggleInlineStyle, toggleBlockType, editorState}) => {
    return (       
        <Toolbar>
            <InlineStylesControls toggleStyle={toggleInlineStyle} editorState={editorState}/>
            <BlockStylesControls toggleStyle={toggleBlockType} editorState={editorState} />
        </Toolbar>
    );
};
export default StyledToolbar;