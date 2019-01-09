import React from "react";
import {configure, render, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AuthLink from "./AuthLink";

configure({adapter: new Adapter});

describe("<AuthLink />", () => {
    const fooData = {
        href: "/foo",
        image: "./sdadf",
        children: "terefere"
    };
    const link = <AuthLink href={fooData.href} icon={fooData.image}>{fooData.children}</AuthLink>;
    let wrapper;
    beforeEach(() => {
        wrapper = render(link);
    });

    describe("<AuthLink />", () => {
        it("has href value passed in props", () => {
        
            expect(wrapper.prop("href")).toEqual(fooData.href);
        });
        it("Has text of children prop passed to AuthLink", () => {
            expect(wrapper.text()).toEqual(fooData.children);
        });
        it("Has title of children prop passed to AuthLink", () => {
            expect(wrapper.prop("title")).toEqual(fooData.children);
        });
        describe("AuthLink icon", () => {
            let icon;
            beforeEach(() => {
                wrapper = mount(link);
                icon = wrapper.find("img").first();
            });
            it("has image", () => {
                expect(icon.exists()).toEqual(true);
            });
            it("Image has src of icon prop, passed to AuthLink", () => {
                expect(icon.prop("src")).toEqual(fooData.image);
            });

        });
    });
});


