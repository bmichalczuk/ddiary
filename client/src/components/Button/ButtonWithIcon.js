import React from "react";
import Button from "./Button";
import styled from "styled-components";
import btnThemes from "../../shared/btnThemes";
import VisuallyHidden from "../../shared/VisuallyHidden";
import PropTypes from "prop-types";


const ButtonWithIcon = ({iconOnly = false, ...rest}) => {
    const props = {iconOnly, ...rest};
    const {Icon, children} = props;
    return (
        <Button {...props} btnTheme="danger">
            <Icon {...props}/>
            {iconOnly
                ? <VisuallyHidden>{children}</VisuallyHidden>
                : children
            }
        </Button>
    );
};

const StyledButtonWithIcon = styled(ButtonWithIcon)`
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

ButtonWithIcon.propTypes = {
    Icon: PropTypes.element.isRequired,
    iconOnly: PropTypes.bool
};

export default StyledButtonWithIcon;