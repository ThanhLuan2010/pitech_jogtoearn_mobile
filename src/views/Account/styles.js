import { StyleSheet } from 'react-native'
import { width, height } from '../../constants/sizes'
import { VIOLET, WHITE } from '../../themes/colors'
import Fonts from '../../themes/Fonts'

export default StyleSheet.create({
  container:{
    flex:1
  },
  frameAvata:{
    width:56,
    height: 56,
    justifyContent:'center',
    alignItems:'center'
  },
  avatar:{
    width: '80%',
    height: '80%',
  },
  infoWrap:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'#E8C3FF',
    paddingBottom:16,
    paddingHorizontal:10
  },
  rowCenter:{
    flexDirection:'row',
    alignItems:'center'
  },
  ic_right:{
    width: 24,
    height: 22,
  },
  fieldvalue:{
    color:WHITE,
    fontSize:12,
    fontFamily:Fonts.play
  },
  field:{
    color:VIOLET,
    fontSize:12,
    fontFamily:Fonts.playBold
  },
  rowbetween:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  filedIcon:{
    width:38,
    height: 38,
    resizeMode:'contain'
  },
  rowtitle:{
    marginLeft:30,
    fontFamily:Fonts.playBold,
    color:WHITE,
    fontSize:14
  },
  version:{
    color:'#AD00BC',
    fontFamily:Fonts.playBold,
    
  }

})