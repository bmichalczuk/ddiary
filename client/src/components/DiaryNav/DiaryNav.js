import React, {useState} from "react";
import styled from "styled-components";
import DiaryEntriesList from "../DiaryEntriesList/DiaryEntriesList";
import HamburgerButton from "../HamburgerButton/HamburgerButton";


const DiaryNav = (props) => {
    const [navActive, setNavActive] = useState(false);
    const {entriesIdList, selectedEntry, selectEntry} = props;
    const toggleNavActive = () => setNavActive(!navActive);
    const hideNav = () => setNavActive(false);
    
    
    const clearActiveEntry = () => selectEntry(true);
    if(!entriesIdList || entriesIdList.length === 0) {
        return <div>There are no entries yet. Click "New entry" to start your journal!</div>;
    }
    return (
        <Nav navActive={navActive} className={props.className}>   
            <HamburgerButton active={navActive} onClick={toggleNavActive} />
            <DiaryEntriesList 
                clearActiveEntry={clearActiveEntry}
                selectedEntry={selectedEntry} 
                entriesIdList={entriesIdList}
                collapse={!navActive}
                hideNav={hideNav}
            />
        </Nav>
    );
    
};

const Nav = styled.nav`
    z-index: 2;
    width: ${({navActive}) => navActive && "100%"};
    position: ${({navActive}) => navActive && "absolute"};
    background: ${({theme:{primaryColor}}) => primaryColor};
    padding-top: 1em;
    
    @media (min-width: ${({theme:{breakpoint}}) => breakpoint.medium}) {
        position: static;
        width: 15em;
        z-index: 0;
        height: 100%;
    }
    
    @media (min-width: ${({theme:{breakpoint}}) => breakpoint.big}) {
        width: 17em;
    }
    
`;

export default DiaryNav;