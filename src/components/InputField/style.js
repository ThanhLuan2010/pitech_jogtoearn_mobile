import {StyleSheet} from 'react-native'
import {WHITE} from '../../themes/colors'
import Fonts from '../../themes/Fonts'

export default StyleSheet.create({
    container:{
        borderWidth:2,
        borderRadius:15,
        paddingHorizontal:24,
        height:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    input:{
        fontSize:14,
        height:40,
        flexDirection:'row',
        color:WHITE,
        fontFamily:Fonts.play
        
    }
}) 

