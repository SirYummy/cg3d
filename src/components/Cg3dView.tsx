import {View, Dimensions} from 'react-native'

export default class Cg3dView extends View {
    render() {
        const {width, height} = Dimensions.get('window')

        return (<h1>My Cg3dView</h1>)
    }
}