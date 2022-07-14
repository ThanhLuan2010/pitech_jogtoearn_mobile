import {StyleSheet} from 'react-native';
import {COLOR_PRIMARY, VIOLET, WHITE} from '../../themes/colors';
import * as sizes from '../../constants/sizes';
import Fonts from '../../themes/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  frameAvata: {
    width: 90.45,
    height: 93.65,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  avatar: {
    width: '80%',
    height: '80%',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  fieldvalue: {
    color: WHITE,
    fontSize: 12,
    fontFamily: Fonts.play,
  },
  field: {
    color: VIOLET,
    fontSize: 12,
    fontFamily: Fonts.playBold,
    marginRight: 10,
  },
  button: {
    // width:sizes.width*107.43/414
  },
  input: {
    width: (sizes.width * 210.54) / 414,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 38,
    height: 38,
  },
  title:{
    color:WHITE,
    fontSize:14,
    fontFamily:Fonts.playBold,
    marginLeft:32
  },
  ic_right:{
    width: 24,
    height: 22,
  },
});
