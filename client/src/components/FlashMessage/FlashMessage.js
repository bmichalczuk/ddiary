import React, {Component} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {clearFlashMsg} from "../../actions";
import {TransitionGroup, CSSTransition} from 'react-transition-group';


const Message = ({className, flashMsg}) => <div className={className}>{flashMsg.text}</div>;

const StyledMessage = styled(Message)`
            font-weight: bold;
            padding: .5em;
            background: ${props => props.flashMsg.type === "warning" ? "red" : "teal"};
            color: white;
            text-align: center;
`

class FlashMessage extends Component {
    state = {text: "", type: ""};
    static getDerivedStateFromProps(props, state) {
        if(!state.text) {
            return {...props.flashMsg};
        }
        return null;
    }
    render() {
            return (
                <div className={this.props.className}>
                    <CSSTransition
                        in={Boolean(this.props.flashMsg.text)} 
                        timeout={2000} 
                        classNames="msg"
                        unmountOnExit
                    >
                    <StyledMessage flashMsg={this.state} />
                    </CSSTransition>
                </div>
            );
        }
    };
   


const StyledFlashMessage = styled(FlashMessage)`
        width: 100%;
        position: fixed;
        bottom: 0;
        
       
    
    .msg-enter {
        transform: translateY(3em);
    }
    .msg-enter.msg-enter-active {
        transform: translateY(0);
        transition: transform 1s ease-in-out;
    }
    .msg-exit {
        transform: translateY(0);
    }
    .msg-exit.msg-exit-active {
        transform: translateY(3em);
        transition: transform 1s ease-out;
    }
`;

function mapStyleToProps({flashMsg}) {
    return {flashMsg};
}

export default connect(mapStyleToProps, {clearFlashMsg})(StyledFlashMessage);