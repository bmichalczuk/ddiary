import React, {Component} from "react";
import styled from "styled-components";
import {Editor, EditorState, convertFromRaw} from "draft-js"
import Button from "../Button/Button";
import DiaryEntryForm from "../../containers/DiaryEntryForm/DiaryEntryForm";
import axios from "axios";
import {Redirect} from "react-router-dom";
import ButtonLikeLink from "../ButtonLikeLink/ButtonLikeLink";
import {connect} from "react-redux";
const CancelButton = styled(Button)`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

`

class DiaryEntry extends Component {
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
        await axios.delete(`/api/diary/${this.props.diaryEntry.timestamp}`);
        this.setState({exists: false, removing: false});
    }
    renderEditMode = () => {
        if(this.props.diaryEntry === null || this.props.diaryEntry === undefined) {
            return <p>terefer</p>;
        }
        
        let {timestamp, editorState} = this.props.diaryEntry;
    
        const { className} = this.props;
        
        const date = new Date(timestamp);
        //const editorState = convertFromRaw(editorState);
        const heading = date.toLocaleDateString();
        const entry = {timestamp, editorState: convertFromRaw(editorState)};
        return (
            <div>
                terefere
                
                <DiaryEntryForm entry={entry} /> 
            </div>
            
        );
    }
    renderReadMode = () => {
        if(this.props.diaryEntry === null || this.props.diaryEntry === undefined) {
            return (
                <p>fdaf</p>
            );
        }
        console.log(this.props.diaryEntry);
        const {id} =this.props.match.params;
        const entry = this.props.diaryEntry
        const {timestamp} = entry;
        const {className} = this.props;
        const date = new Date(timestamp);
        const editorState = convertFromRaw(entry.editorState);
        const heading = date.toLocaleDateString();

        return (
            <>
                <h2>{heading}</h2>
                <Editor editorState={EditorState.createWithContent(editorState)} onChange={() => undefined} />
                <Button loading={this.state.removing} title="Remove entry" btnTheme="danger" onClick={this.removeDiaryEntry}>Delete</Button>
                <Button onClick={() => this.setState({editMode: true})}>edit</Button>
                <ButtonLikeLink to={`/diary/edit/${id}`}>Edit ext</ButtonLikeLink>
            </>
        )
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

const StyledDiaryEntry = styled(DiaryEntry)`
    border: 3px solid green;
    margin: 3px auto;
    color: #000000;
`;

function mapStateToProps({auth}, ownProps) {
    if(auth) {
        const entry = auth.data.diary[ownProps.match.params.id];
        return {diaryEntry: entry};
    }
};

export default connect(mapStateToProps)(StyledDiaryEntry);