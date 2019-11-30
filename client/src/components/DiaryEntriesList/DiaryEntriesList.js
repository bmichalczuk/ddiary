import React, {Component} from "react";
import styled from "styled-components";
import PropTyes from "prop-types";
import Spinner from "../Spinner/Spinner";
import DiaryEntryLink from "../DiaryEntryLink/DiaryEntryLink";
import ButtonLikeLink from "../ButtonLikeLink/ButtonLikeLink";

const NewEntryLink = styled(ButtonLikeLink)`
    display: block;
    width: 90%;
    margin: 0 auto 10px;
`;


const DiaryEntriesList = (props) => {
    if(!props.entriesIdList || props.entriesIdList.length === 0) {
        return <div>There are no entries yet. Click "New entry" to start your journal!</div>;
    }
    const {entriesIdList, selectedEntry, selectEntry, className,collapse, hideNav, clearActiveEntry} = props;
    const handleNewEntryLinkClick = () => {
        clearActiveEntry();
        hideNav();
    }
    return (
        <div className={className}>
            
            
            <NewEntryLink onClick={handleNewEntryLinkClick} to="/diary/new">New Entry</NewEntryLink>
            <ol>
                {entriesIdList.map(id => {
                    return (
                        <li key={id}  >
                            <DiaryEntryLink onClick={hideNav} active={selectedEntry === id} id={id} />
                        </li>
                    );
                })}
            </ol>
        </div>
            
    );
};

const StyledDiaryEntriesList = styled(DiaryEntriesList)`
    padding: 10px;
    transition: transform .3s ease-in-out;
    transform: translateX(${({collapse}) => collapse ? "-250px" : "0"});
    overflow: scroll;
    list-style-type: none;
    height: 100vh;
    position: ${({collapse}) => collapse ? "absolute" : "static"};
    z-index: ${({collapse}) => collapse ? "2" : "0"};
    @media (min-width: ${({theme:{breakpoint}}) => breakpoint.medium}) {
        transform: translateY(0);
        position: static;
        z-index: 0;
        padding: 0;
    }
    @media (min-width: ${({theme:{breakpoint}}) => breakpoint.big}) {
    }
`;

export default StyledDiaryEntriesList;