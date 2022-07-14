import {StyleSheet} from 'react-native';
import * as sizes from '../../constants/sizes';
import {WHITE, VIOLET} from '../../themes/colors';
import Fonts from '../../themes/Fonts';

export default StyleSheet.create({
  background: {
    flex: 1,
    height: sizes.height + 50,
  },

  title: {
    color: 'white',
    fontSize: 18,
    fontFamily: Fonts.callingCodeBold,
    marginTop: 26.5,
    marginHorizontal: 24,
  },
  button: {
    alignSelf: 'center',
    marginBottom: 40,
    borderRadius: 10,
    width: 253,
    height: 44,
  },
});
