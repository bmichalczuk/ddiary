import React, {Component} from "react";
import {fetchUser} from "./actions/index";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AppHeader from "./containers/AppHeader/AppHeader";
import Layout from "./components/Layout/Layout";
import LandingPage from "./components/LandingPage/LandingPage";
import Diary from "./containers/Diary/Diary";
import DiaryNew from "./components/DiaryNew/DiaryNew";
import {Redirect} from "react-router-dom";

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() { 
        return (
            <Router>
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
                    <Route path="/diary/new" component={DiaryNew} />
                </Layout>
            </Router>
        );     
    }
};

function mapStateToProps({auth}) {
    return {auth}
}

export default connect(mapStateToProps, {fetchUser})(App);