import React, {Component} from "react";
import styled from "styled-components";
import PropTyes from "prop-types";
import {connect} from "react-redux";
import DiaryEntry from "../DiaryEntry/DiaryEntry";
import {fetchUser} from "../../actions";
import Spinner from "../Spinner/Spinner";


export class DiaryEntriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {selected: null};
    }
    renderEntries = () => {
        const entries = Object.values(this.props.auth.data.diary);
        const sortedEntries = entries.sort((a,b) => a.timestamp > b.timestamp);
        return ( 
            <>
                <ol>
                    {sortedEntries.map(entry => <DiaryEntry key={entry.timestamp} entry={entry} /> )}
                </ol>
            </>
        );
    }
    renderNoEntries = () => {
        return (
            <>
                <div>There are no entries yet. Click "New entry" to start your journal!</div>
            </>
        );
    }
    render() {
        if(this.props.auth) {
            const diaryIsEmpty = Object.keys(this.props.auth.data.diary);
            return (
                <>
                    {diaryIsEmpty.length ? this.renderEntries() : this.renderNoEntries()}
                </>
            )
        } 
        return <Spinner />;
    };
};


function mapStateToProps({auth}) {
    return {auth};
}
export default connect(mapStateToProps, {fetchUser})(DiaryEntriesList);