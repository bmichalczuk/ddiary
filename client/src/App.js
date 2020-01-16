import React, {Component} from "react";
import {fetchUser} from "./actions/index";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AppHeader from "./containers/AppHeader/AppHeader";
import Layout from "./components/Layout/Layout";
import LandingPage from "./components/LandingPage/LandingPage";
import Diary from "./containers/Diary/Diary";
import {Redirect} from "react-router-dom";
import FlashMessage from "./components/FlashMessage/FlashMessage";

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



function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps, {fetchUser})(App);