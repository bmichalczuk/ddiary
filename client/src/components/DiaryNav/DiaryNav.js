import React, {Component} from "react";
import styled from "styled-components";
import DiaryEntriesList from "../DiaryEntriesList/DiaryEntriesList";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import ButtonLikeLink from "../ButtonLikeLink/ButtonLikeLink";


class DiaryNav extends Component {
    state = {navActive: false};
    toggleNavActive = () => {
        this.setState(prevState => {
            return {navActive: !prevState.navActive};
        });
    }
    hideNav = () => {
        this.setState({navActive: false});
    }
    render() {
        const {entriesIdList, selectedEntry, selectEntry} = this.props;
        if(!entriesIdList || entriesIdList.length === 0) {
            return <div>There are no entries yet. Click "New entry" to start your journal!</div>;
        }
        return (
            <Nav navActive={this.state.navActive} className={this.props.className}>             
                <HamburgerButton active={this.state.navActive} onClick={this.toggleNavActive} />
                <DiaryEntriesList 
                    selectedEntry={selectedEntry} 
                    selectEntry={selectEntry} 
                    entriesIdList={entriesIdList}
                    collapse={!this.state.navActive}
                    hideNav={this.hideNav}
                />
            </Nav>
        );
    }
};

const Nav = styled.nav`
    --red: "red";
    --small: ${props => props.theme.breakpoint.small};
    padding-top: 10px; 
    background: ${({theme: {primaryColor}}) => primaryColor };
    z-index: 2;
    width: ${({navActive}) => navActive && "100%"};
    position: ${({navActive}) => navActive && "absolute"};
    @media (min-width: var(--small)) {
        max-width: ${({theme}) => theme.breakpoint.small};
        position: static;
        z-index: 0;
        max-width: 150px;
        background: red;
    }
    
`;
const StyledDiaryNav = styled(DiaryNav)`


`;

export default DiaryNav;