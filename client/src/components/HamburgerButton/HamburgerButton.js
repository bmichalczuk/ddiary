import React from "react";
import styled from "styled-components";


const HamburgerButton = (props) => {
        return (
            <button className={props.className} active={props.active} onClick={props.onClick}>
                <span className="hamburger-box">
                    <span className="hamburger-box__inner"></span>
                </span>
            </button>
        );
};


const StyledHamburgerButton = styled(HamburgerButton)`
    border: none;
    display: block;
    margin: ${({active}) => active ? "0 10px 0 80%" : "0px"};
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
    transition:.2s .1s ease-in-out;
    @media (min-width: ${props => props.theme.breakpoint.medium}) {
      display: none;
    }
    .hamburger-box {
      width: 35px;
      height: 24px;
      position: relative;
      display: inline-block;
    }
    .hamburger-box__inner,
    .hamburger-box__inner:before,
    .hamburger-box__inner:after {
      height: 3px;
      position: absolute;
      background-color: black;
      width: 35px;
      left: 0;
      transition: transform .2s ease-in-out;
      display: inline-block;
    }
    .hamburger-box__inner:before,
    .hamburger-box__inner:after {
      content: "";
    }
    .hamburger-box__inner {
      top: 50%;
      transform: translateY(-50%);
      transition: background-color .1s .1s ease-in-out;
      ${props => props.active && "background-color: transparent;"}
    }
    .hamburger-box__inner:before {
      top: 10px;
      ${props => {
        if(props.active) {
          return (
            "transform: translateY(-10px) rotate(45deg);"
          );
        }
      }}
    }
    .hamburger-box__inner:after {
      top: -10px;
      ${props => {
        if(props.active) {
          return (
            "transform: translateY(10px) rotate(-45deg);"
          );
        }
      }}
    }

  `;

export default StyledHamburgerButton;