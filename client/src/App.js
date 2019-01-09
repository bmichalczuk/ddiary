import React, {Component} from "react";
import {fetchUser} from "./actions/index";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AppHeader from "./containers/AppHeader/AppHeader";
import Layout from "./components/Layout/Layout";
import LandingPage from "./components/LandingPage/LandingPage";
const Diary = () => <div>Dashboard</div>;

const DiaryNew = () => <div>diary new</div>

class App extends Component {
    async componentDidMount() {
        this.props.fetchUser();
    }
    render() { 
        return (
            <Router>
                <Layout>
                    <AppHeader />
                    <Route path="/" exact component={LandingPage} />
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