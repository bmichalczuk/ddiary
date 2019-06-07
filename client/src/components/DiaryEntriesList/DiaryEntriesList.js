import React, {Component} from "react";
import styled from "styled-components";
import PropTyes from "prop-types";
import {connect} from "react-redux";
import DiaryEntry from "../DiaryEntry/DiaryEntry";
import {converFromRaw, EditorState} from "draft-js";
import {fetchUser} from "../../actions";
export class DiaryEntriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {selected: null};
    }
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        
        if(this.props.auth) {
            console.log(Object.values(this.props.auth.data.diary));
            const entries = Object.values(this.props.auth.data.diary);
            return( 
                <ol>
                    {entries.map(entry => <DiaryEntry key={entry.timestamp} entry={entry} /> )}


                </ol>
            );
        }
        return <div>nodata</div>
    };
};


function mapStateToProps({auth}) {
    return {auth};
}
export default connect(mapStateToProps, {fetchUser})(DiaryEntriesList);