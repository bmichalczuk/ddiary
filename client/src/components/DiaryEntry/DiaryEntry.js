import React, {Component} from "react";
import styled from "styled-components";
import {Editor, EditorState, convertFromRaw} from "draft-js"
import Button from "../Button/Button";
import axios from "axios";
import {Redirect} from "react-router-dom";
import ButtonLikeLink from "../ButtonLikeLink/ButtonLikeLink";
import {connect} from "react-redux";
import {fetchUser} from "../../actions";
import TextEditor from "../TextEditor/TextEditor";
import SubHeading from "../SubHeading/SubHeading";
import {clearFlashMsg, setFlashMsg} from "../../actions";
import showAndHide from "../../helpers/showAndHide";
import ConfirmationWindow from "../ConfirmationWindow/ConfirmationWindow";

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
        removing: false,
        removeConfirmationWindow: false
    };
    showMessageOnRemove = () => {
        const msgSetting = {text: "Succesfuly removed entry!", type: "info"};
        showAndHide(this.props.setFlashMsg.bind(this, msgSetting), this.props.clearFlashMsg);
    }
    removeDiaryEntry = async () => {
        this.setState({removing: true});
        await axios.delete(`/api/diary/${this.props.diaryEntry.timestamp}`);
        await this.props.fetchUser();
        this.showMessageOnRemove();
        this.setState({exists: false, removing: false});
    }

    disableEditor = () => undefined;
    askForRemoveConfirmation = () => this.setState({removeConfirmationWindow: true});
    cancelRemoveConfirmation = () => this.setState({removeConfirmationWindow: false});
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
        const date = new Date(timestamp);
        const editorState = convertFromRaw(entry.editorState);
        const heading = date.toLocaleDateString();
        return (
            <div className={this.props.className}>
                <SubHeading>{heading}</SubHeading>
                <TextEditor
                    editorState={EditorState.createWithContent(editorState)}
                    readOnly
                />          
                <div className="DiaryEntry__btns">
                    <Button  
                        title="Remove entry" 
                        btnTheme="danger" 
                        onClick={this.askForRemoveConfirmation}>
                        Delete
                    </Button>
                    <ButtonLikeLink to={`/diary/edit/${id}`}>Edit ext</ButtonLikeLink>
                </div>
                {this.state.removeConfirmationWindow && 
                    <ConfirmationWindow cancel={this.cancelRemoveConfirmation}>
                        <p>Are you sure to remove this entry? </p>
                            <Button 
                                inline
                                loading={this.state.removing} 
                                title="Remove entry" btnTheme="danger" 
                                onClick={this.removeDiaryEntry}>Delete
                            </Button>
                            <Button 
                                inline
                                title="Remove entry" btnTheme="primary" 
                                onClick={this.cancelRemoveConfirmation}>Cancel
                            </Button>


                    </ConfirmationWindow>
                            
                }
            </div>
        );
    }
};

const StyledDiaryEntry = styled(DiaryEntry)`
    color: #000000;
    display: flex;
    flex-direction: column;
    padding: 5px;
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

export default connect(mapStateToProps, {clearFlashMsg, setFlashMsg, fetchUser})(StyledDiaryEntry);