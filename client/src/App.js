import React, {Component} from "react";
import {fetchUser,setFlashMsg,clearFlashMsg} from "./actions/index";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AppHeader from "./containers/AppHeader/AppHeader";
import Layout from "./components/Layout/Layout";
import LandingPage from "./components/LandingPage/LandingPage";
import Diary from "./containers/Diary/Diary";
import DiaryNew from "./components/DiaryNew/DiaryNew";
import {Redirect} from "react-router-dom";
import FlashMessage from "./components/FlashMessage/FlashMessage";
import showAndHide from "./helpers/showAndHide";

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() { 
        return (
            <Router>
                <Layout>
                        <AppHeader />
                        <button onClick={() => this.props.setFlashMsg({text: "UWAGA UWAGA!!!", type: "warning"})}>set warning</button>
                        <button onClick={() => this.props.clearFlashMsg()}> warning>clear warning</button>
                        <button onClick={() => showAndHide(() => this.props.setFlashMsg({text: "terefer", type: "warmomg"}), this.props.clearFlashMsg, 3000)}> showandhide</button>
                        <Route path="/" exact render={() => (
                            this.props.auth ? (
                                <Redirect to="/diary" />
                            ) : (
                                <LandingPage />
                            )
                        )} />
                        <Route path="/diary" exact component={Diary} />
                        <Route path="/diary/new" component={DiaryNew} />
                        <FlashMessage />
                </Layout>
            </Router>
        );     
    }
};

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps, {fetchUser,setFlashMsg,clearFlashMsg})(App);