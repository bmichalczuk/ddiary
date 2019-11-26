import React, {Component} from "react";
import {fetchUser} from "./actions/index";
import {connect} from "react-redux";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import AppHeader from "./containers/AppHeader/AppHeader";
import Layout from "./components/Layout/Layout";
import LandingPage from "./components/LandingPage/LandingPage";
import Diary from "./containers/Diary/Diary";
import DiaryNew from "./components/DiaryNew/DiaryNew";
import {Redirect} from "react-router-dom";
import FlashMessage from "./components/FlashMessage/FlashMessage";
import styled from "styled-components";
import DiaryEntry from "./components/DiaryEntry/DiaryEntry";
import DiaryEditEntry from "./containers/DiaryEditEntry/DiaryEditEntry";

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() { 
        return (
            <Router className={this.props.className}>
                <Layout>
                        <AppHeader />
                            <Route path="/" exact render={() => (
                                this.props.auth ? (
                                    <Redirect to="/diary" />
                                ) : (
                                    <LandingPage />
                                )
                            )} />
                            <Route path="/diary" exact component={Diary} />
                        <FlashMessage />
                </Layout>
            </Router>
        );     
    }
};
/*

                            <Route path="/diary/entry/:id" component={DiaryEntry} />
                            <Route path="/diary/edit/:id" component={DiaryEditEntry} />*/
                            


function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps, {fetchUser})(App);