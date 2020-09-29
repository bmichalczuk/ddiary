import React from "react";
import ButtonLikeLink from "./ButtonLikeLink";
import styled from "styled-components";
import btnThemes from "../../shared/btnThemes";
import VisuallyHidden from "../../shared/VisuallyHidden";
import PropTypes from "prop-types";


const ButtonLikeLinkWithIcon = ({iconOnly = false, ...rest}) => {
    const props = {iconOnly, ...rest};
    const {Icon, children} = props;
    return (
        <ButtonLikeLink {...props}>
            <Icon {...props}/>
            {iconOnly
                ? <VisuallyHidden>{children}</VisuallyHidden>
                : children
            }
        </ButtonLikeLink>
    );
};

const StyledButtonLikeLinkWithIcon = styled(ButtonLikeLinkWithIcon)`
    ${({btnTheme}) => {
        const type = btnTheme ? btnTheme : "primary";
        const {color, hoverColor} = btnThemes[type];
        return `
            svg {
                fill: ${color};
            }
            :hover,
            :focus {
                svg {
                    fill: ${hoverColor};
                }
            }
        `
    }}
`;

StyledButtonLikeLinkWithIcon.propTypes = {
    Icon: PropTypes.func.isRequired,
    iconOnly: PropTypes.bool
};

export default StyledButtonLikeLinkWithIcon;