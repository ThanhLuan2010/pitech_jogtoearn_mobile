import {StyleSheet} from 'react-native'
import { WHITE } from '../../themes/colors'
import Fonts from '../../themes/Fonts'

export default StyleSheet.create({
    background:{
       resizeMode:'contain'
    },
    title:{
        fontFamily:Fonts.Aldrich,
        fontSize:18, 
        color:WHITE
    },
})