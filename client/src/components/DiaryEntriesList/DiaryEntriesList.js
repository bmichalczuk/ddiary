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
                        <li key={id}  >
                            <DiaryEntryLink onClick={hideNav} active={selectedEntry === id} id={id} />
                        </li>
                    );
                })}
            </ol>
            
    );
};

const StyledDiaryEntriesList = styled(DiaryEntriesList)`
    height: 100%;
    padding: 10px;
    overflow: scroll;
    list-style-type: none;
    
`;

export default StyledDiaryEntriesList;