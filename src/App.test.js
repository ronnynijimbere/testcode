import App from './App'
import { shallow } from 'enzyme'
import { findByTestAtrr, testStore } from './../utils'
import React from 'react'

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
}

describe('App Component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Some Title 1',
                body: 'Some Text'
            },{
                title: 'Some Title 2',
                body: 'Some Text'
            },{
                title: 'Some Title 3',
                body: 'Some Text'
            }]
        }
        wrapper = setUp(initialState);
    })

    it('Should render without errors', () => {
        const component = findByTestAtrr(wrapper, 'appComponent');
        expect(component.length).toBe(1)
    })

    it('exampleMethod_updatesState Method should update state as expected', () => {
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updatesState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    })

    it('exampleMethod_returnsAValue Method should return value as expected', () => {
        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnsAValue(8);
        expect(newValue).toBe(9);
    })
})