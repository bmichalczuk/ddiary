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
            <Nav navActive={this.state.navActive} className={this.props.clasName}>             
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
    padding-top: 10px; 
    background: ${props =>  "yellow" || props.theme.primaryColor };
    z-index: 2;
    width: ${({navActive}) => navActive && "100%"};
    min-height: ${({navActive}) => navActive && "100vh"};
    position: ${({navActive}) => navActive && "absolute"};
    @media (min-width: ${props => props.theme.breakpoint.small}) {
        max-width: ${props => props.theme.breakpoint.small};
        position: static;
        z-index: 0;
        max-width: 150px;
    }
    
`;
const StyledDiaryNav = styled(DiaryNav)`


`;

export default StyledDiaryNav;