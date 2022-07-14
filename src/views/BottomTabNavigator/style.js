import { StyleSheet } from 'react-native'
import { width, height } from '../../constants/sizes'

export default StyleSheet.create({
    bottom: {
        // width:width,
        height: 65,
        alignItems: 'center',
        marginHorizontal: 16,
        justifyContent: 'center',
        flexDirection: 'row',
        position:'absolute',
        bottom:20,
        width:width - 32
    },
    iconTab: {
        width: 18,
        height: 18,
        resizeMode: 'cover'
    }
})