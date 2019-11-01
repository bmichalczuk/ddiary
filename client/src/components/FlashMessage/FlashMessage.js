import React, {Component} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {clearFlashMsg} from "../../actions";
import {TransitionGroup, CSSTransition} from 'react-transition-group';


class Message extends Component {
    state = {text: "", type: ""};
    static getDerivedStateFromProps(props, state) {
        if(!state.text) {
            return {...props.flashMsg};
        }
        return null;
    }
    render() {
        return (
            <div>
                {this.state.text}
            </div>
        );
    }
};

class FlashMessage extends Component {
    render() {
            return (
                <div className={this.props.className}>
                    <CSSTransition
                        in={Boolean(this.props.flashMsg.text)} 
                        timeout={2000} 
                        classNames="example"
                        unmountOnExit
                    >
                    <Message flashMsg={this.props.flashMsg} />
                    </CSSTransition>
                </div>
            );
        
            
        }
    };
   


const StyledFlashMessage = styled(FlashMessage)`
        width: 100%;
        position: fixed;
        bottom: 0;
        /*transform: ${props => props.flashMsg.text ? "translateY(0)" : "translateY(100%)"};*/
        div {
            background: red;
            color: white;
            text-align: center;
        }
        
       
    
    .example-enter {
        transform: translateY(2em);
    }
    .example-enter.example-enter-active {
        transform: translateY(0);
        transition: transform 1s ease-in-out;
    }
    .example-exit {
        transform: translateY(0);
    }
    .example-exit.example-exit-active {
        transform: translateY(2em);
        transition: transform 1s ease-out;
    }
`;

function mapStyleToProps({flashMsg}) {
    return {flashMsg};
}

export default connect(mapStyleToProps, {clearFlashMsg})(StyledFlashMessage);