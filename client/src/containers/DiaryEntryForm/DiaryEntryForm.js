import React, {Component} from "react";
import RichTextEditor from "../../components/RichTextEditor/RichTextEditor";
import axios from "axios";
import {Formik, Form} from "formik";
import {EditorState, convertToRaw} from "draft-js";
import Button from "../../components/Button/Button";
import styled from "styled-components";
import {Redirect} from "react-router-dom";


class DiaryEntryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {succes: false};
    }
    renderForm = ({entry, className}) => {
        let timestamp;
        let editorState;
        
        if(entry) {
            timestamp = entry.timestamp;
            editorState = entry.editorState;
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
                    onSubmit = {async (values, actions) => {
                        const {timestamp, editorState} = values;
                        const state = await convertToRaw(editorState.getCurrentContent());
                        const res = await axios.post("/api/diary", {timestamp, editorState: state });
                        if(res) {
                            actions.setSubmitting(false);
                            this.setState({succes: true});
                        }
                        
                    }
                        
                    }
                >
                    {({values, isSubmitting, setFieldValue}) => {
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
            return <Redirect to="/diary" />;
        }
        return this.renderForm(this.props);
  
    }
};



const styledDiaryEntryForm = styled(DiaryEntryForm)`
    form {
        max-width: 800px;
        background: pink;
    }
    form > button {
        float: right;
        margin-top: .5em;
    }
`;

export default styledDiaryEntryForm;