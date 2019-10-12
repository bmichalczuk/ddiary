import React, {Component} from "react";
import styled from "styled-components";
import PropTyes from "prop-types";
import Spinner from "../Spinner/Spinner";
import DiaryEntryLink from "../DiaryEntryLink/DiaryEntryLink";

const DiaryEntriesList = (props) => {
    if(!props.entriesIdList || props.entriesIdList.length === 0) {
        return <div>There are no entries yet. Click "New entry" to start your journal!</div>;
    }
    const {entriesIdList, selectedEntry, selectEntry, className,collapse, hideNav} = props;
    return (
            <ol className={className}>
                {entriesIdList.map(id => {
                    return (
                        <li key={id} onClick={() => {selectEntry(id)}} >
                            <DiaryEntryLink onClick={hideNav} selected={selectedEntry} id={id} />;
                        </li>
                    );
                })}
            </ol>
    );
};

const StyledDiaryEntriesList = styled(DiaryEntriesList)`
    padding: 10px 5px;
    transition: transform .3s ease-in-out;
    transform: ${props => props.collapse ? "translateX(-250px)" : "translateX(0)"};
    overflow: hidden;
    list-style-type: none;
    max-width: 280px;
    ${props => props.collapse && "position: absolute; z-index: 2;"};
    @media (min-width: ${props => props.theme.breakpoint.small}) {
        transform: translateX(0);
        position: static;
        z-index: 0;
    }
    @media (min-width: ${props => props.theme.breakpoint.medium}) {
       
        background: orange;
    }
    @media (min-width: ${props => props.theme.breakpoint.big}) {
   
        background: red;
    }
`;

export default StyledDiaryEntriesList;