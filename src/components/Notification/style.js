import {StyleSheet} from 'react-native';
import { width } from '../../constants/sizes';
import {
  WHITE,
  NEW_BACKGROUND,
  BORDER,
  VIOLET,
  DARK,
  PINK,
} from '../../themes/colors';
import Fonts from '../../themes/Fonts';

export default StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    flexDirection: 'row',
    paddingVertical:8,
    marginHorizontal:16
  },
  image:{
    width: 84,
    height: 84,
    borderRadius:10
  },
  rowBetween:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  trashWrap:{
    backgroundColor:DARK,
    paddingVertical:6,
    paddingHorizontal:14,
    borderRadius:20,
    borderWidth:1,
    borderColor:BORDER,
    marginLeft:15
  },
  type:{
    color:'#7000B5',
    fontSize:12,
    fontFamily:Fonts.playBold
  },
  title:{
    color:WHITE,
    fontSize:12,
    fontFamily:Fonts.playBold
  },
  time:{
    color:VIOLET,
    fontSize:10,
    fontFamily:Fonts.TitilliumWeb_Italic
  }
});
