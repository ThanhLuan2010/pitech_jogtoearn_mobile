import {StyleSheet} from 'react-native';
import { height, width } from '../../../constants/sizes';
import {
  COLOR_PRIMARY,
  WHITE,
  INCOME_BACKGROUND,
  VIOLET_TEXT,
  NEW_BACKGROUND,
  BORDER,
} from '../../../themes/colors';
import Fonts from '../../../themes/Fonts';

export default StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: NEW_BACKGROUND,
    paddingHorizontal: 12,
    paddingVertical: 18,
    borderRadius: 16,
  },
  news: {
    color: WHITE,
    fontFamily: Fonts.playBold,
    fontSize: 24,
    marginBottom: 12,
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
    fontFamily: Fonts.playBold,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  newTitle: {
    color: WHITE,
    fontSize: 14,
    fontFamily: Fonts.playBold,
  },
  newTime: {
    color: WHITE,
    fontSize: 14,
    fontFamily: Fonts.TitilliumWeb_Italic,
  },
  itemImage: {
    width: 136/414*width,
    height: 90/896*height,
    borderRadius: 8,
  },
});
