import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {convertSecondsToReadableDate} from "../../helpers/convertDate";


const DiaryEntryLink = (props) => {
    const {id, className, selected} = props;
    const entryTitle = convertSecondsToReadableDate(id);
    return <Link onClick={props.onClick} className={className} selected={selected} to={`/diary/entry/${id}`}>{entryTitle}</Link>;
};

const StyledEntryLink = styled(DiaryEntryLink)`
    background-color: ${props => props.selected === props.id ? props.theme.col: "gred"};
    padding: .6em 1em;
    border: 1px solid #a7b0af;
    box-shadow: 1px 2px 1px -1px #a7b0af;
    display: flex;
    background: blue;
    margin: 2px;
    text-align: center;
    text-decoration: none;
`;


export default StyledEntryLink;