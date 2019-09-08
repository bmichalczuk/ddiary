import React, {Component} from "react";
import styled from "styled-components";
import {Editor, EditorState, convertFromRaw} from "draft-js"
import Button from "../Button/Button";
import DiaryEntryForm from "../../containers/DiaryEntryForm/DiaryEntryForm";
import axios from "axios";
import {Redirect} from "react-router-dom";

class EditableDiaryEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            exists: true,
            removing: false

        };
    }
    cancelEditMode = () => this.setState({editMode: false});
    switchEditMode = () => {
        this.setState((prevState, props) => ({editMode: !prevState.editMode}));
    }
    removeDiaryEntry = async () => {
        this.setState({removing: true});
        await axios.delete(`/api/diary/${this.props.entry.timestamp}`);
        this.setState({exists: false, removing: false});
    }
    renderReadMode = () => {
        const {entry, className} = this.props;
        const {timestamp} = entry;
        const date = new Date(timestamp);
        const editorState = convertFromRaw(entry.editorState);
        const heading = date.toLocaleDateString();
        return (
            <>
                <h2>{heading}</h2>
                <Editor editorState={EditorState.createWithContent(editorState)} onChange={() => undefined} />
                <Button loading={this.state.removing} title="Remove entry" btnTheme="danger" onClick={this.removeDiaryEntry}>Delete</Button>
                <Button title="Edit entry" onClick={this.switchEditMode}>Edit</Button>
            </>
        )
    }
    renderEditMode = () => {
        const {entry, className} = this.props;
        const {timestamp} = entry;
        const date = new Date(timestamp);
        const editorState = convertFromRaw(entry.editorState);
        const heading = date.toLocaleDateString();
        return (
            <div>
                <Button title="Cancel" onClick={this.cancelEditMode}>Cancel</Button>
                <DiaryEntryForm entry={{timestamp, editorState}} /> 
            </div>
            
        );
    }
    render() {
        if(!this.state.exists) {
            return <Redirect to="/" />
        }
        return (
            <article className={this.props.className}>
                {this.state.editMode ? this.renderEditMode() : this.renderReadMode()}
            </article>
        );
    }
}
export const DiaryEntry = ({entry, className}) => {
    const {timestamp} = entry;
    const date = new Date(timestamp);
    const editorState = convertFromRaw(entry.editorState);
    const heading = date.toLocaleDateString();
    return (
            <article className={className}>
                <h2>{heading}</h2>
                <Editor editorState={EditorState.createWithContent(editorState)} onChange={() => undefined} />
                
            </article>
    );
};

const StyledDiaryEntry = styled(EditableDiaryEntry)`
    border: 3px solid green;
    margin: 3px auto;
`;

export default StyledDiaryEntry;