import React from "react";
import AuthLink from "../AuthLink/AuthLink";
import Icon from "./google-icon.svg";
const GoogleAuthLink = () => {
    return (
        <AuthLink 
            icon={Icon} 
            href="/auth/google" 
            bgColor="#dd4b39" 
            color="white"
        >
        Login with Google
        </AuthLink>
    );
};
   
export default GoogleAuthLink;