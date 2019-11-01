import React, {Component} from "react";
import RichTextEditor from "../../components/RichTextEditor/RichTextEditor";
import axios from "axios";
import {Formik, Form} from "formik";
import {EditorState, convertToRaw, convertFromRaw, ContentState} from "draft-js";
import Button from "../../components/Button/Button";
import styled from "styled-components";
import {Redirect} from "react-router-dom";
import {fetchUser} from "../../actions";
import {connect} from "react-redux";

const Warning = styled.div`
    color: red;
    text-align: center;
    font-weight: bold;
`;

class DiaryEntryForm extends Component {
    state = {succes: false};
    checkIfEmpty = (currentContent) => !currentContent.hasText() || currentContent.getPlainText() === "";
    renderForm = ({entry, className}) => {
        let timestamp;
        let editorState;
        if(entry) {
            timestamp =  entry.timestamp;
            editorState = EditorState.createWithContent(entry.editorState);
            
        } else {
            timestamp = Date.now();
            editorState = EditorState.createEmpty();
        }
        return (
            <div className={className}>
                <Formik
                    initialValues = {{
                        timestamp,
                        editorState
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
                        const {timestamp, editorState} = values;
                        const currentContent = editorState.getCurrentContent();
                        const state = await convertToRaw(currentContent)
                        const res = await axios.post("/api/diary", {timestamp, editorState: state });
                        if(res) {
                            actions.setSubmitting(false);
                            this.setState({succes: true});
                            this.props.fetchUser();
                        }
                    }
                    }
                >
                    {({values, touched, errors, isSubmitting, setFieldValue}) => {
                        if(values.redirect) {
                            return <Redirect to="/" />;
                        }
                        return (
                            <Form>
                                <RichTextEditor 
                                    timestamp={values.timestamp}
                                    
                                    editorState={values.editorState}
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
        console.log(this.context);
        if(this.state.succes) {
            if(this.props.entry) {
                const timestamp = this.props.entry.timestamp;
                return <Redirect to={`/diary/entry/${timestamp}`} />;
            }
            return <Redirect to={`/`} />;
        }
        return this.renderForm(this.props);
    }
};

const styledDiaryEntryForm = styled(DiaryEntryForm)`
    form {
        max-width: 800px;
    }
    form > button {
        margin-top: .5em;
        margin-left: auto;
        margin-right:10px;
    }
`;

export default connect(null, {fetchUser})(styledDiaryEntryForm);