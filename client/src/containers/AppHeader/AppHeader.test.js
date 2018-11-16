import React from "react";
import AppHeader from "./AppHeader";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter});

describe('<AppHeader/> with no user logged in', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AppHeader />);
    });
    it('Has h1 heading', () => {
        expect(wrapper.find('h1').exists()).toEqual(true);
    });
    it('h1 has text of "DDiary"', () => {
        expect(wrapper.find('h1').first().text()).toEqual("DDiary");
    });
    it('Has no logout link', () => {
        expect(wrapper.find('a[href="/api/logout"').exists()).toEqual(false);
    });
    describe('AppHeader logo', () => {
        let logo;
        beforeEach(() => {
            logo = wrapper.find('a[href="/"]')
        })
        it('Header has Logo link with href of "/"', () => {
            expect(wrapper.find(logo).exists()).toEqual(true);
        });
        it('Logo has image with alt of ""', () => {
            expect(logo.find('img[alt=""]').exists()).toEqual(true);
        });
    });
    describe('<AppHeader /> with user loggedin>', () => {
        beforeEach(wrapper.setProps({auth: true}));
        it('Has link with href of "/diary"', () => {
            expect(wrapper.find('a[href="/diary"').exists()).toEqual(true);
        });
        it('Has no logout link', () => {
            expect(wrapper.find('a[href="/api/logout"]').exists()).toEqual(false);
        });
        describe('AppHeader logo with user logged in', () => {
            let logo;
            beforeEach(() => {
                logo = wrapper.find('a[href="/diary"]')
            })
            it('Header has Logo with changed href', () => {
                expect(wrapper.find(logo).exists()).toEqual(true);
            });
            it('Logo has image with alt of ""', () => {
                expect(logo.find('img[alt=""]').exists()).toEqual(true);
            });
        });
    });
});