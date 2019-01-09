import React from "react";
import {mount, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LandingPage from "./LandingPage";

configure({adapter: new Adapter});

describe("<LandingPage />", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<LandingPage />);
    });
    it("Has link leading to '/auth/google'", () => {
        expect(wrapper.find("a[href='/auth/google']").exists()).toBe(true);
    });
});