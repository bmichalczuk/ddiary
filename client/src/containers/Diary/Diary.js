import React, {useState} from "react";
import styled from "styled-components";
import DiaryEntry from "../../components/DiaryEntry/DiaryEntry";
import {connect} from "react-redux";
import ButtonLikeLink from "../../components/ButtonLikeLink/ButtonLikeLink";
import {fetchUser} from "../../actions/index";
import {BrowserRouter as Router, Route} from "react-router-dom";
import DiaryEditEntry from "../DiaryEditEntry/DiaryEditEntry";
import DiaryNav from "../../components/DiaryNav/DiaryNav";

const NewEntryLink = styled(ButtonLikeLink)`
    @media (min-width: ${({theme:{breakpoint}}) => breakpoint.small}) {
        max-width: 11em;
        margin-bottom: 1em;
        color: ${({secondaryColor}) => secondaryColor};
        background: ${({fourthColor}) => fourthColor};
    }
`;

const NoSelectedEntryInfo = ({className}) => <div className={className}>Select entry or add new one!</div>;
const StyledNoSelectedEntryInfo = styled(NoSelectedEntryInfo)`
    text-align: center;
    font-size: 3em;
    margin-top: 3em;

`;


export const Diary = (props) => {
        const [selectedEntryId, selectEntry] = useState(null);
        if(!props.auth) {
            return null;
        }
        const entriesIdList = Object.keys(props.auth.data.diary);
        return (
            <section className={props.className}>
                   <NewEntryLink to="/diary/new">New entry</NewEntryLink>
                        <Router>                        
                            <DiaryWrapper>
                                <DiaryNav
                                    selectedEntry={selectedEntryId} 
                                    selectEntry={selectEntry} 
                                    entriesIdList={entriesIdList}
                                />
                                <EntryContainer>
                                    {!selectedEntryId && <StyledNoSelectedEntryInfo />}
                                    <Route path="/diary/entry/:id"  component={DiaryEntry} />
                                    <Route path="/diary/edit/:id" component={DiaryEditEntry} />
                                </EntryContainer>
                            </DiaryWrapper>
                        </Router>
            </section>
        );

};

const StyledDiary = styled(Diary)`
    padding-top: 10px;
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