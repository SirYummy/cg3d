import React from 'react'
import renderer from 'react-test-renderer'
import Cg3dView from '../../src/components/Cg3dView'

const Dimensions = jest.genMockFromModule('Dimensions')

describe('Cg3dView', () => {
    describe('Rendering', () => {
        
        let rendered: Cg3dView = null

        beforeAll(() => {
            rendered = renderer.create(<Cg3dView />).toJSON()
        })

        it('renders without crashing', () => {
            expect(rendered).toBeTruthy()
        })
        
        it('matches against snapshot', () => {
            expect(rendered).toMatchSnapshot()
        })
        
        it('gets the dimensions of the window', () => {
            expect(Dimensions.get).toBeCalled()
            expect(Dimensions.get).toBeCalledTimes(1)
            expect(Dimensions.get).toHaveBeenCalledWith('window')
        })

        xit('it creates an ExpoTHREE.Renderer and passes props to it', () => {

        })
    })
})
