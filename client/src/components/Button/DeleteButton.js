import React from "react";
import Button from "./Button";
import TrashCanIcon from "../../Icons/TrashCanIcon";
import VisuallyHidden from "../../shared/VisuallyHidden";
import ButtonWithIcon from "./ButtonWithIcon";

const DeleteButton = (props) => {
    return (
        <ButtonWithIcon {...props} Icon={TrashCanIcon} btnTheme="danger">
            {props.children}
        </ButtonWithIcon>
    );
};




export default DeleteButton;