import {StyleSheet} from 'react-native';
import {
  COLOR_PRIMARY,
  WHITE,
  INCOME_BACKGROUND,
  VIOLET_TEXT,
} from '../../../themes/colors';
import Fonts from '../../../themes/Fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: INCOME_BACKGROUND,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 16,
    marginBottom: 8,
    alignItems: 'flex-end',
  },
  value: {
    color: WHITE,
    fontFamily: Fonts.playBold,
    fontSize: 32,
    marginRight: 12,
  },
  title: {
    fontFamily: Fonts.playBold,
    color: VIOLET_TEXT,
    fontSize: 12,
  },
  detailButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: WHITE,
  },
  detailtxt: {
    fontSize: 12,
    fontFamily: Fonts.playBold,
  },
});
