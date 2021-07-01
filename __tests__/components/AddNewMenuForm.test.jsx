import React from 'react';
import AddNewMenuForm from '../../src/components/AddNewMenuForm';
import {
    render
} from 'enzyme';

describe('AddNewMenuForm', () => {
    it('should rendered correctly', () => {
        const component = render( <AddNewMenuForm /> );
        expect(component).toMatchSnapshot();
    });
});