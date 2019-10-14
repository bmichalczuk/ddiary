import React, {Component} from "react";
import styled from "styled-components";
import {Editor, EditorState, convertFromRaw} from "draft-js"
import Button from "../Button/Button";
import DiaryEntryForm from "../../containers/DiaryEntryForm/DiaryEntryForm";
import axios from "axios";
import {Redirect} from "react-router-dom";
import ButtonLikeLink from "../ButtonLikeLink/ButtonLikeLink";
import {connect} from "react-redux";
import {fetchUser} from "../../actions";

const CancelButton = styled(Button)`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

`;

class DiaryEntry extends Component {
    state = {
        exists: true,
        removing: false
    };

    removeDiaryEntry = async () => {
        this.setState({removing: true});
        await axios.delete(`/api/diary/${this.props.diaryEntry.timestamp}`);
        await this.props.fetchUser();
        this.setState({exists: false, removing: false});
    }

    render() {
        if(!this.state.exists) {
            return <Redirect to="/" />
        }
        if(this.props.diaryEntry === null || this.props.diaryEntry === undefined) {
            return (
                <p>fdaf</p>
            );
        }
        const {id} =this.props.match.params;
        const entry = this.props.diaryEntry
        const {timestamp} = entry;
        const {className} = this.props;
        const date = new Date(timestamp);
        const editorState = convertFromRaw(entry.editorState);
        const heading = date.toLocaleDateString();

        return (
            <article className={this.props.className}>
                <h2>{heading}</h2>
                <Editor editorState={EditorState.createWithContent(editorState)} onChange={() => undefined} />
                <div className="DiaryEntry__btns">
                    <Button loading={this.state.removing} title="Remove entry" btnTheme="danger" onClick={this.removeDiaryEntry}>Delete</Button>
                    <ButtonLikeLink to={`/diary/edit/${id}`}>Edit ext</ButtonLikeLink>
                </div>
                
            </article>
        )
    }
};

const StyledDiaryEntry = styled(DiaryEntry)`
    border: 3px solid green;
    margin: 3px auto;
    color: #000000;
    padding: 5px 20px 0;
    font-size: 1em;
    h2 {
        text-align: center;
        border-bottom: 1px dotted ${({theme: {secondaryColor}}) => secondaryColor};
        margin-bottom: 10px;
    }
    .DiaryEntry__btns {
        display: flex;
        padding-top: 15px;
    }
`;

function mapStateToProps({auth}, ownProps) {
    if(auth) {
        const entry = auth.data.diary[ownProps.match.params.id];
        return {diaryEntry: entry};
    }
};

export default connect(mapStateToProps, {fetchUser})(StyledDiaryEntry);