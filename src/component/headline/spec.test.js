import React from 'react'
import { shallow } from 'enzyme'
import Headline from './index'


import { findByTestAtrr, checkProps } from './../../../utils'

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />)
    return component;
}

describe('Headline Component', () => {

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {

            const expectedProps = {
                header: 'Test Header',
                desc: 'Test desc',
                tempArray: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@email.com',
                    age: 17,
                    onlineStatus: false
                }]
            }
            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined();
         
        })
    })

    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp(props)
        });

        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1)
        })

        it('Should render a H1', () => {
            const h1 = findByTestAtrr(wrapper, 'header');
            expect(h1.length).toBe(1)
        })

        it('Should render a Desc', () => {
            const p = findByTestAtrr(wrapper, 'desc');
            expect(p.length).toBe(1)
        })


    })

    describe('Have NO props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should not render', () => {
            const component = findByTestAtrr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        })

    })


})

