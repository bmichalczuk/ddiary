import React from "react";
import ButtonLikeLinkWithIcon from "./ButtonLikeLinkWithIcon";
import EditIcon from "../../Icons/EditIcon";

const ButtonLikeEditLink = (props) => {
    return (
        <ButtonLikeLinkWithIcon {...props} Icon={EditIcon}>
            {props.children}
        </ButtonLikeLinkWithIcon>
    );
};

export default ButtonLikeEditLink;