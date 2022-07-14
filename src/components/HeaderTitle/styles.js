import {StyleSheet} from 'react-native'
import {WHITE} from '../../themes/colors'
import Fonts from '../../themes/Fonts'

export default StyleSheet.create({
    container:{
      marginHorizontal:16,
      marginVertical:30,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    ic_back:{
      width:32,
      height:32
    },
    title:{
        textAlign:'center',
        fontSize:24,
        fontFamily:Fonts.playBold,
        color:WHITE
    }
}) 

