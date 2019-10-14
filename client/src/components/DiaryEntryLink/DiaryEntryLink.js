import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {convertSecondsToReadableDate} from "../../helpers/convertDate";
import theme from "../Layout/theme";


const DiaryEntryLink = (props) => {
    const {id, className, selected} = props;
    const entryTitle = convertSecondsToReadableDate(id);
    return <Link onClick={props.onClick} className={className} selected={selected} to={`/diary/entry/${id}`}>{entryTitle}</Link>;
};

const StyledEntryLink = styled(DiaryEntryLink)`
    background-color: ${({selected, id, theme}) => selected === id ? theme.secondaryColor : theme.thirdColor};
    padding: .6em 1em;
    border: 1px solid #a7b0af;
    border-radius: 5px;
    box-shadow: 1px 2px 1px -1px #a7b0af;
    display: flex;
    color: ${({theme:{primaryColor}}) => primaryColor};
    margin: 10px;
    text-align: center;
    text-decoration: none;
`;


export default StyledEntryLink;