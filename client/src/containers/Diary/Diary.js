import React, {Component} from "react";
import styled from "styled-components";
import DiaryEntry from "../../components/DiaryEntry/DiaryEntry";
import DiaryEntriesList from "../../components/DiaryEntriesList/DiaryEntriesList";
import {connect} from "react-redux";
import ButtonLikeLink from "../../components/ButtonLikeLink/ButtonLikeLink";
import {fetchUser} from "../../actions/index";

export class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedEntry: null};
    }
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        console.log(this.props.auth);
        return (
            <section className={this.props.className}>
                <ButtonLikeLink to="/diary/new">New entry</ButtonLikeLink>
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
    max-width: 400px;
    border: 1px solid red;
    position: relative;
    display: flex;
    flex-direction: column;
`;

function mapStateToProps({auth}) {
    return {auth};
};

export default connect(mapStateToProps, {fetchUser})(StyledDiary);