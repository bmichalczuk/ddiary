import React, {Component} from "react";
import RichTextEditor from "../../components/RichTextEditor/RichTextEditor";
import axios from "axios";
import {Formik, Form} from "formik";
import Button from "../../components/Button/Button";
import styled from "styled-components";
import {Redirect} from "react-router-dom";
import {fetchUser} from "../../actions";
import {connect} from "react-redux";
import {setFlashMsg,clearFlashMsg} from "../../actions";
import showAndHide from "../../helpers/showAndHide";

const Warning = styled.div`
    color: red;
    text-align: center;
    font-weight: bold;
`;

class DiaryEntryForm extends Component {
    state = {succes: false, onSuccesRedirectPath: ""};
    checkIfEmpty = (currentContent) => !currentContent.hasText() || currentContent.getPlainText() === "";
    displayMsgOnSucces = () => {
        const {setFlashMsg, clearFlashMsg, entry} = this.props;
        const text = entry ? "Entry updated!" : "Succesfully added new entry!";
        const flashMsgSettings = {text, type: "info"};
        showAndHide(setFlashMsg.bind(this, flashMsgSettings), clearFlashMsg);
    }
    displayMsgOnError = (errorMsg) => {
        const {setFlashMsg, clearFlashMsg} = this.props;
        const text = errorMsg;
        const flashMsgSettings = {text, type: "warning"};
        showAndHide(setFlashMsg.bind(this, flashMsgSettings), clearFlashMsg);
    }
    renderForm = ({entry, className}) => {
        let timestamp;
        let value;
        if(entry) {
            timestamp =  entry.timestamp;
            value = entry.value;
            
        } else {
            timestamp = Date.now();
            value = "";
        }
        return (
            <div className={className}>
                <Formik
                    initialValues = {{
                        timestamp,
                        value
                    }}
                    validate={values => {
                        let errors = {};
                        const currentContent = values.editorState.getCurrentContent();
                        if(this.checkIfEmpty(currentContent)) {
                            errors.entry = "Your entry is empty! Type something in ;)";
                        }
                        return errors;
                    }}
                    onSubmit = {async (values, actions) => {
                        const {timestamp, value} = values;
                        try {
                            const res = await axios.post("/api/diary", {timestamp, value });
                            if(res) {
                                actions.setSubmitting(false);
                                this.displayMsgOnSucces();
                                this.props.fetchUser();
                                this.setState({
                                    succes: true, 
                                    onSuccesRedirectPath: `/diary/entry/${timestamp}`
                                });
                            }
                        } catch(err) {
                            actions.setSubmitting(false);
                            this.displayMsgOnError("Ooops, something went wrong!");
                        }
                        
                    }
                    }
                >
                    {({values, errors, isSubmitting, setFieldValue}) => {
                        if(values.redirect) {
                            return <Redirect to="/" />;
                        }
                        return (
                            <Form>
                                <RichTextEditor 
                                    timestamp={values.timestamp}
                                    
                                    value={values.value}
                                    onChange={setFieldValue}
                                />
                                {errors.entry && <Warning>{errors.entry}</Warning>}
                                <Button  
                                    title="Submit"
                                    loading={isSubmitting} 
                                    disabled={isSubmitting} 
                                    btnTheme="primary">
                                    Submit
                                </Button>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        );
    }
    render() {
        if(this.state.succes) {
            const {onSuccesRedirectPath} = this.state;
            if(this.props.entry) {
                return <Redirect to={onSuccesRedirectPath} />;
            }
            return <Redirect to={onSuccesRedirectPath} />;
        }
        return this.renderForm(this.props);
    }
};

const styledDiaryEntryForm = styled(DiaryEntryForm)`
    form {
        margin: 0 auto;
    }
    form > button {
        margin-top: .5em;
        margin-left: auto;
        margin-right:10px;
    }
`;

export default connect(null, {fetchUser, clearFlashMsg, setFlashMsg})(styledDiaryEntryForm);