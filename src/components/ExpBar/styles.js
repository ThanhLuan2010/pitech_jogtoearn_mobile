import {StyleSheet} from 'react-native';
import {WHITE, PINK} from '../../themes/colors';
import Fonts from '../../themes/Fonts';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 2.71,
    borderColor: PINK,
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lable: {
    color: WHITE,
    fontSize: 10,
    fontFamily: Fonts.playBold,
  },
  absolute: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
  },
});
