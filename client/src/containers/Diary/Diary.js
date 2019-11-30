import React, {useState, useEffect} from "react";
import styled from "styled-components";
import DiaryEntry from "../../components/DiaryEntry/DiaryEntry";
import {connect} from "react-redux";
import ButtonLikeLink from "../../components/ButtonLikeLink/ButtonLikeLink";
import {fetchUser} from "../../actions/index";
import {Switch, Route, BrowserRouter as Router, useRouteMatch, Redirect} from "react-router-dom";
import DiaryEditEntry from "../DiaryEditEntry/DiaryEditEntry";
import DiaryNav from "../../components/DiaryNav/DiaryNav";
import DiaryNew from "../../components/DiaryNew/DiaryNew";


const StyledDiary = styled.section`
    padding-top: 10px;
    background-color: inherit;
    color: black;
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    @media (min-width: ${({theme}) => theme.breakpoint.small}) {
        background: yellow;
    }
    @media (min-width: ${({theme}) => theme.breakpoint.medium}) {
        background: orange;
    }
    @media (min-width: ${({theme}) => theme.breakpoint.big}) {
        background: red;
    }
    @media (min-width: ${({theme}) => theme.breakpoint.large}) {
        background: violet;
    }
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
    padding: 0 2em;
`;

const NoSelectedEntryInfo = ({className}) => <div className={className}>Select entry or add new one!</div>;

const StyledNoSelectedEntryInfo = styled(NoSelectedEntryInfo)`
    text-align: center;
    font-size: 3em;
    margin-top: 3em;

`;

export const Diary = (props) => {
        const [selectedEntryId, selectEntry] = useState(null);
        const {path} = useRouteMatch();
        if(!props.auth) {
            return null;
        }
        const entriesIdList = Object.keys(props.auth.data.diary);
        return (

            <StyledDiary className={props.className}>
                            <DiaryWrapper>
                                <Router>
                                    <DiaryNav
                                        selectedEntry={selectedEntryId} 
                                        selectEntry={selectEntry} 
                                        entriesIdList={entriesIdList}
                                    />
                                    <EntryContainer>
                                        {!selectedEntryId && <StyledNoSelectedEntryInfo />}
                                        <Route exact path={`${path}/entry/:id`}>
                                            <DiaryEntry setAsActiveEntry={selectEntry}/>
                                        </Route>
                                        <Route exact path={`${path}/edit/:id`}>
                                            <DiaryEditEntry />
                                        </Route> 
                                        <Route path="/diary/new" component={DiaryNew} />   
                                    </EntryContainer>
                                </Router>
                            </DiaryWrapper>
            </StyledDiary>
        );

};




function mapStateToProps({auth}) {
    return {auth};
};

export default connect(mapStateToProps, {fetchUser})(Diary);