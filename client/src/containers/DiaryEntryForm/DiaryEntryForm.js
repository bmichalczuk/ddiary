import React from "react";
import RichTextEditor from "../../components/RichTextEditor/RichTextEditor";
import axios from "axios";
import {Formik, Form} from "formik";
import {EditorState} from "draft-js";
import Button from "../../components/Button/Button";
import {addEntry} from "../../actions";
const DiaryEntryForm = (props) => {
    return (
        <div>
            <Formik
                initialValues = {{
                    timestamp: Date.now(),
                    editorState: EditorState.createEmpty()
                    
                }}
                onSubmit = {(values, actions) => {
                    axios.post("/api/diary", values);
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
                            <Button type="submit">Submit</Button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default DiaryEntryForm;