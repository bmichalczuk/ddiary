import React, {Component} from "react";
import styled from "styled-components";
import DiaryEntry from "../../components/DiaryEntry/DiaryEntry";
import DiaryEntriesList from "../../components/DiaryEntriesList/DiaryEntriesList";
import {connect} from "react-redux";
import ButtonLikeLink from "../../components/ButtonLikeLink/ButtonLikeLink";
import {fetchUser} from "../../actions/index";
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import DiaryEditEntry from "../DiaryEditEntry/DiaryEditEntry";
import DiaryNav from "../../components/DiaryNav/DiaryNav";

export class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedEntry: null};
    }
    selectEntry = (id) => {
        this.setState({selectedEntry: id});
    }
    render() {
        if(this.props.auth === null || this.props.auth === undefined) {
            return (
                <p>waiitt</p>
            );
        }
        const entriesIdList = Object.keys(this.props.auth.data.diary);
        return (
            <section className={this.props.className}>
                   <ButtonLikeLink onClick={this.hideNav} to="/diary/new">New entry</ButtonLikeLink>
                    
                        <Router>
                           
                            <DiaryWrapper>
                            <DiaryNav
                                selectedEntry={this.state.selectedEntry} 
                                selectEntry={this.selectEntry} 
                                entriesIdList={entriesIdList}
                            />
                            <EntryContainer>
                                <Route path="/diary/entry/:id"  component={DiaryEntry} />
                                <Route path="/diary/edit/:id" component={DiaryEditEntry} />
                            </EntryContainer>
                           
                            
                            </DiaryWrapper>
                        </Router>
                
                
            </section>
        );
    }
};

const StyledDiary = styled(Diary)`
    background-color: inherit;
    color: black;
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;
const DiaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
    
    @media (min-width: ${({theme}) => theme.breakpoint.medium}) {
        flex-direction: row;
        flex-wrap: nowrap;
    }
`;
const EntryContainer = styled.div`
    flex: 1;
`;


function mapStateToProps({auth}) {
    return {auth};
};

export default connect(mapStateToProps, {fetchUser})(StyledDiary);