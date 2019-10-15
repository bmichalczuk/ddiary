import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {convertSecondsToReadableDate} from "../../helpers/convertDate";
import theme from "../Layout/theme";


const DiaryEntryLink = ({id,className,selected, onClick}) => {
    const entryTitle = convertSecondsToReadableDate(id);
    return <Link onClick={onClick} className={className} active={selected === id} selected={selected} to={`/diary/entry/${id}`}>{entryTitle}</Link>;
};

const StyledEntryLink = styled(DiaryEntryLink)`
    background-color: ${({active, theme: {fourthColor, thirdColor}}) => active ? fourthColor : thirdColor};
    padding: .6em 1em;
    border: 1px solid #a7b0af;
    border-radius: 5px;
    box-shadow: 1px 2px 1px -1px #a7b0af;
    display: flex;
    color: ${({active, theme:{primaryColor, secondaryColor}}) => active ? secondaryColor : primaryColor};
    margin: 10px;
    text-align: center;
    text-decoration: none;
`;


export default StyledEntryLink;