import React, {useState} from "react";
import styled from "styled-components";
import DiaryEntriesList from "../DiaryEntriesList/DiaryEntriesList";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import ButtonLikeLink from "../ButtonLikeLink/ButtonLikeLink";

const NewEntryLink = styled(ButtonLikeLink)`
    display: block;
    width: 90%;
    margin: 0 auto 10px;
`;

const CollapsableNavWrapper = styled.div`
    transition: transform .3s ease-in-out;
    transform: translateX(${({collapse}) => collapse ? "-250px" : "0"});
    position: ${({collapse}) => collapse ? "absolute" : "static"};
    z-index: ${({collapse}) => collapse ? "2" : "0"};
    height: 100vh;
    overflow: hidden;
    @media (min-width: ${({theme:{breakpoint}}) => breakpoint.medium}) {
        transform: translateY(0);
        position: static;
        z-index: 0;
        padding: 0;
    }
`;

const DiaryNav = (props) => {
    const [navActive, setNavActive] = useState(false);
    const {entriesIdList, selectedEntry, selectEntry} = props;
    const toggleNavActive = () => setNavActive(!navActive);
    const hideNav = () => setNavActive(false);
    const clearActiveEntry = () => selectEntry(true);
    const handleNewEntryClick = () => {
        clearActiveEntry();
        hideNav();
    };
    
    return (
        <Nav navActive={navActive} className={props.className}>   
            <HamburgerButton active={navActive} onClick={toggleNavActive} />
            <CollapsableNavWrapper collapse={!navActive}>
                
                <NewEntryLink btnTheme="emptyPrimary" onClick={handleNewEntryClick} to="/diary/new">New Entry</NewEntryLink>
                {
                    !entriesIdList || entriesIdList.length === 0
                    ? <div>There are no entries yet. Click "New entry" to start your journal!</div>
                    :  <DiaryEntriesList 
                        selectedEntry={selectedEntry} 
                        entriesIdList={entriesIdList}
                        hideNav={hideNav}
                        /> 



                } 
            </CollapsableNavWrapper>
           
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