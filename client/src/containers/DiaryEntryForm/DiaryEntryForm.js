import React from "react";
import RichTextEditor from "../../components/RichTextEditor/RichTextEditor";
import axios from "axios";
import {Formik, Form} from "formik";
import {EditorState, convertToRaw} from "draft-js";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";
import {fetchUser} from "../../actions";
import styled from "styled-components";

const DiaryEntryForm = ({entry, className}) => {
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
                    await axios.post("/api/diary", {timestamp, editorState: state });
                    actions.setSubmitting(false);
                }
                    
                }
            >
                {({values, isSubmitting, setFieldValue}) => {
                    return (
                        <Form>
                            <RichTextEditor 
                                timestamp={values.timestamp}
                                editorState={values.editorState}
                                onChange={setFieldValue}
                            />
                            <Spinner  />
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