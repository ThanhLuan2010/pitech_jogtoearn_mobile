import {StyleSheet} from 'react-native';
import {height, width} from '../../constants/sizes';
import {WHITE, VIOLET_TEXT} from '../../themes/colors';
import Fonts from '../../themes/Fonts';

export default StyleSheet.create({
  container: {
    height: (height * 31) / 896+5,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:10
  },
  title:{
    fontSize:12,
    fontFamily:Fonts.playBold,
    color:WHITE
  }
});
