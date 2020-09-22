import React from "react";
import Button from "./Button";
import styled, { ThemeConsumer } from "styled-components";
import TrashCanIcon from "../../Icons/TrashCanIcon";
import VisuallyHidden from "../../shared/VisuallyHidden";

const DeleteButton = (props) => {
    return (
        <Button {...props}>
            <TrashCanIcon />
            {props.iconOnly
            ? <VisuallyHidden>Remove</VisuallyHidden>
            : "Remove"
            }
            
        </Button>
    )
};

export default DeleteButton;