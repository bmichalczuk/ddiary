import React, {Component} from "react";
import {fetchUser} from "./actions/index";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
const Diary = () => <div>Dashboard</div>;
const Landing = () => <div>hello world</div>;
const DiaryNew = () => <div>diary new</div>
const AppHeader = () => <header>header</header>
class App extends Component {
    async componentDidMount() {
        this.props.fetchUser();
    }
    render() { 
        return (
            <div>
                
                <Router>
                    <div>
                    <AppHeader />
                    <Route path="/" exact component={Landing} />
                    <Route path="/diary" exact component={Diary} />
                    <Route path="/diary/new" component={DiaryNew} />
                    </div>
                </Router>
            </div>
            
           
        );     
    }
};

function mapStateToProps({auth}) {
    return {auth}
}

export default connect(mapStateToProps, {fetchUser})(App);