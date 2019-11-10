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
    padding: 1em 1.5em;
    border: 1px solid #a7b0af;
    border-radius: 10px;
    box-shadow: 1px 2px 1px -1px #a7b0af;
    display: flex;
    color: ${({active, theme:{primaryColor, secondaryColor}}) => active ? secondaryColor : primaryColor};
    margin: 10px;
    justify-content: center;
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 1.2em;
    @media (min-width: ${({theme: {breakpoint}}) => breakpoint.small}) {
        margin: 0;
        border-radius: 0;
    }
`;


export default StyledEntryLink;