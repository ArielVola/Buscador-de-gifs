import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { shallow } from "enzyme"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el <GifGrid />', () => {
    const category = 'One Punch';

    test('Debe de mostrarse correctamente', () => { 

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow( <GifGrid category={ category } />);
        expect( wrapper ).toMatchSnapshot();
     })

/*      test('Debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => { 

        const wrapper = shallow( <GifGrid category={ category } />);

      }) */

})