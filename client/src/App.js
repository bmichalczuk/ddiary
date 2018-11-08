import React, {Component} from "react";
import {fetchUser} from "./actions/index";
import {connect} from "react-redux";

class App extends Component {
    async componentDidMount() {
        this.props.fetchUser();
        
    }
    render() { 
        
        return (
            <div>
                {this.props.auth ? `Hello ${this.props.auth.googleId}` : "hello world"}
            </div>
        
        );     
    }
};

function mapStateToProps({auth}) {
    return {auth}
}

export default connect(mapStateToProps, {fetchUser})(App);