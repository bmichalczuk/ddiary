import React, {Component} from "react";
import styled from "styled-components";
import DiaryEntry from "../../components/DiaryEntry/DiaryEntry";
import DiaryEntriesList from "../../components/DiaryEntriesList/DiaryEntriesList";
import {connect} from "react-redux";
import RichTextEditor from "../../components/RichTextEditor/RichTextEditor";

export class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedEntry: null};
    }
    render() {
        return (
            <section className={this.props.className}>
                {this.state.selectedEntry 
                ? <DiaryEntry />
                : <DiaryEntriesList />
                }
                <RichTextEditor />
            </section>
        );
    }
};

const StyledDiary = styled(Diary)`
    background-color: #fffaaa;
`;

function mapStateToProps({auth}) {
    return {auth};
};

export default connect(mapStateToProps)(StyledDiary);