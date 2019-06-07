import React from "react";
import {Diary} from "./Diary";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {DiaryEntry} from "../../components/DiaryEntry/DiaryEntry";
import {DiaryEntriesList} from "../../components/DiaryEntriesList/DiaryEntriesList";
import Link from "react-router-dom";
configure({adapter: new Adapter});

describe("<Diary />", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Diary />);
    });
    xit("Has link leading to /diary/new", () => {
        
    })
    it("Display entries list if there is no entry selected", () => {
        wrapper.setState({selectedEntry: false});
        expect(wrapper.find(DiaryEntriesList).exists()).toBe(true);
    });
    it("Doesn't display entries list if there is entry selected", () => {
        wrapper.setState({selectedEntry: true});
        expect(wrapper.find(DiaryEntriesList).exists()).toBe(false);
    });
    it("Display entry when selected", () => {
        wrapper.setState({selectedEntry: true});
        expect(wrapper.find(DiaryEntry).exists()).toBe(true);
    });
    it("Doesn't display entry when there is no entry selected", () => {
        wrapper.setState({selectedEntry: false});
        expect(wrapper.find(DiaryEntry).exists()).toBe(false);
    });
});