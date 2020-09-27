import React, {Component} from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import axios from "axios";
import {Redirect} from "react-router-dom";
import ButtonLikeLink from "../ButtonLikeLink/ButtonLikeLink";
import {connect} from "react-redux";
import {fetchUser} from "../../actions";
import TextEditor from "../QTextEditor/QTextEditor";
import SubHeading from "../SubHeading/SubHeading";
import {clearFlashMsg, setFlashMsg} from "../../actions";
import showAndHide from "../../helpers/showAndHide";
import ConfirmationWindow from "../ConfirmationWindow/ConfirmationWindow";
import {withRouter} from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import DeleteButton from "../Button/DeleteButton";

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
    askForRemoveConfirmation = () => this.setState({removeConfirmationWindow: true});
    cancelRemoveConfirmation = () => !this.state.removing && this.setState({removeConfirmationWindow: false});
    render() {
        if(!this.state.exists) {
            return <Redirect to="/diary/new" />
        }
        if(this.props.diaryEntry === null || this.props.diaryEntry === undefined) {
            return (
                <Spinner size="10em" weight="5px" margin="20% auto" color="thirdColor"/>
            );
        }
        const {timestamp, value} = this.props.diaryEntry;
        const date = new Date(timestamp);
        const heading = date.toLocaleDateString("en", {year: "numeric", month: "long", day: "2-digit"});
        const {id} =this.props.match.params;
        this.props.setAsActiveEntry(id);
        return (
            <div className={this.props.className}>
                <SubHeading>{heading}</SubHeading>
                <TextEditor
                    modules={{toolbar: false}}
                    value={value}
                    readOnly={true}
                />          
                <div className="DiaryEntry__btns">
                    <ButtonLikeLink title="Edit entry" to={`/diary/edit/${id}`}>Edit entry</ButtonLikeLink>
                    <DeleteButton  
                        iconOnly={true}
                        title="Remove entry" 
                        onClick={this.askForRemoveConfirmation}
                    >
                        Remove
                    </DeleteButton>
                
                </div>
                {this.state.removeConfirmationWindow && 
                    <ConfirmationWindow cancel={this.cancelRemoveConfirmation}>
                        <ConfirmationWindowMsg>Are you sure to remove this entry?</ConfirmationWindowMsg>
                        <div className="DiaryEntry__btns">
                            <Button 
                                title="Don't remove" btnTheme="primary" 
                                onClick={this.cancelRemoveConfirmation}>
                                Cancel
                            </Button>
                            <DeleteButton 
                                loading={this.state.removing} 
                                title="Remove entry" 
                                onClick={this.removeDiaryEntry}
                            >
                                Remove
                            </DeleteButton  >
                            
                            </div>  
                    </ConfirmationWindow>
                }
            </div>
        );
    }
};

const ConfirmationWindowMsg = styled.div`
    margin-bottom: 10px;
`;

const StyledDiaryEntry = styled(DiaryEntry)`
    color: #000000;
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin:  0 auto;
    
    .DiaryEntry__btns {
        display: flex;
        padding-top: 15px;
        button {
            margin: 0 5px;
        }
    }
`;

function mapStateToProps({auth}, ownProps) {
    if(auth) {
        const entry = auth.data.diary[ownProps.match.params.id];
        return {diaryEntry: entry};
    }
};

export default withRouter(connect(mapStateToProps, {clearFlashMsg, setFlashMsg, fetchUser})(StyledDiaryEntry));