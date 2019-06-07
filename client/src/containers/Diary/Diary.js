import React, {Component} from "react";
import styled from "styled-components";
import DiaryEntry from "../../components/DiaryEntry/DiaryEntry";
import DiaryEntriesList from "../../components/DiaryEntriesList/DiaryEntriesList";
import {connect} from "react-redux";
import DiaryEntryForm from "../DiaryEntryForm/DiaryEntryForm";
export class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedEntry: null};
    }
    render() {
        console.log(this.props.auth);
        return (
            <section className={this.props.className}>
                {this.state.selectedEntry 
                ? <DiaryEntry />
                : <DiaryEntriesList />
                }
            </section>
        );
    }
};

const StyledDiary = styled(Diary)`
    background-color: inherit;
    color: black;
`;

function mapStateToProps({auth}) {
    return {auth};
};

export default connect(mapStateToProps)(StyledDiary);