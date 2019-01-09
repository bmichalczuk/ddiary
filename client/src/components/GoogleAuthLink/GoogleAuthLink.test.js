import React from "react";
import {shallow, render, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GoogleAuthLink from "./GoogleAuthLink";
configure({adapter: new Adapter});


describe("<GoogleAuthLink />", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<GoogleAuthLink />);
    });
    it("Has href attribute of '/google/auth'", () => {
        expect(wrapper.prop("href")).toEqual("/auth/google");
    });
    it("Has text of 'Login with Google'", () => {
        expect(wrapper.text()).toEqual("Login with Google");
    });
    it("Has title of 'Login with Google'", () => {
        wrapper = render(<GoogleAuthLink />);
        expect(wrapper.prop("title")).toEqual("Login with Google");
    });
});