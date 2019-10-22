import React, {Component} from "react";
import styled from "styled-components";

class FlashMessage extends Component {
    render() {
        return (
            <div>{this.props.message}</div>
        );
    }
};

const StyledFlashMessage = styled(FlashMessage)`
    color: red;
`;


export default StyledFlashMessage;