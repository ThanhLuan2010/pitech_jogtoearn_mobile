import {StyleSheet} from 'react-native'
import {WHITE, BLUE_BLACK, VIOLET_BOLD} from '../../themes/colors'
import Fonts from '../../themes/Fonts'
import font from '../../themes/Fonts'

export default StyleSheet.create({
    avatar:{
        width: 45,
        height: 45,
        borderRadius:23,
        marginRight:10
    },
    rowCenter:{
        flexDirection:'row',
        alignItems:'center'
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    point:{
        backgroundColor:VIOLET_BOLD,
        flexDirection:'row',
        alignItems:'center', 
        paddingVertical:7,
        paddingHorizontal:10, 
        borderRadius:8
    },
    bell:{
        backgroundColor:BLUE_BLACK,
        borderRadius:8,
        padding:7,
        marginLeft:8
    },
    name:{
        fontFamily:Fonts.PoppinsBold,
        fontSize:12,
        color:WHITE
    },
    welcome:{
        fontFamily:Fonts.PoppinsThin,
        fontSize:12,
        color:WHITE
    },
    pointValue:{
        color:WHITE,
        fontFamily:Fonts.play,
        fontSize:12
    }
}) 

