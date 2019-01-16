import React from "react";
import {Diary} from "./Diary";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {DiaryEntry} from "../../components/DiaryEntry/DiaryEntry";
configure({adapter: new Adapter});

describe("<Diary />", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Diary />);
    });
    it("Has nav element", () => {
        expect(wrapper.find("nav").exists()).toBe(true);
    });
    it("Has container to display selected entry", () => {
        expect(wrapper.find(DiaryEntry).exists()).toBe(true);
    });
});