import React from "react";
import TrashCanIcon from "../../Icons/TrashCanIcon";
import ButtonWithIcon from "./ButtonWithIcon";

const DeleteButton = (props) => {
    return (
        <ButtonWithIcon {...props} Icon={TrashCanIcon} btnTheme="danger">
            {props.children}
        </ButtonWithIcon>
    );
};




export default DeleteButton;