import React from 'react';
import MenuDetails from '../../src/components/MenuDetails';
import {
    render
} from 'enzyme';

describe('MenuDetails', () => {
    
    beforeEach(function () {
        this.store = {
            menuListStore: {
                menus: [{name: 'Beers', id: 'beers', description: 'Beers & Details'}]
            },
            selectedMenuStore: {
                id: 'beers'
            }

        }
    });

    it('should rendered correctly', () => {
        const component = render( < MenuDetails / > );
        expect(component).toMatchSnapshot();
    });
});