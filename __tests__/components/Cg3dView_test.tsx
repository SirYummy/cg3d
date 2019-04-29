import React from 'react'
import shallow from 'enzyme'
import from Cg3dView '../components/Cg3dView'

let mockDimensions = jest.mock('Dimensions', )
describe('Cg3dView', () => {
    describe('Rendering', () => {
        
        beforeAll(() => {

        })

        it('renders without crashing', () => {
            const rendered = renderer.create(<Cg3dView />).toJSON()
            expect(rendered).toBeTruthy()
        })
        
        it('matches against snapshot', () => {
            const tree = renderer.create(<Cg3dView />).toJSON()
            expect(tree).toMatchSnapshot()
        })
        
        it('fits the full width of the viewport', () => {
        
        })
    })
})
