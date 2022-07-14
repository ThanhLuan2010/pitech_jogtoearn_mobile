import {StyleSheet} from 'react-native';
import {BORDER, WHITE,VIOLET} from '../../themes/colors';
import * as sizes from '../../constants/sizes';
import Fonts from '../../themes/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:16,
    height: sizes.height,
  },
  header: {
    marginTop: 32,
  },
  mode:{
    color:VIOLET,
    fontFamily:Fonts.playBold,
    textAlign:'center',
    fontSize:24, 
    marginTop:24
  },
  rowbetween:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  searchInput:{
    width: sizes.width/2,
    borderColor:'#4141E7'
  },
  category:{
    color:WHITE,
    fontSize:18,
    fontFamily:Fonts.Aldrich
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderColor: BORDER,
  },
  tabbuttonText: {
    color: WHITE,
    fontSize: 14,
    fontFamily: Fonts.play,
  },
});
