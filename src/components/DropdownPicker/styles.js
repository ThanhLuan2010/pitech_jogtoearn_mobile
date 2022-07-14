import {StyleSheet} from 'react-native';
import {WHITE, VIOLET_TEXT} from '../../themes/colors';
import Fonts from '../../themes/Fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: VIOLET_TEXT,
    borderColor:VIOLET_TEXT,
    borderRadius:30,
  },
  textStyle:{
    fontFamily:Fonts.playBold
  }
});
