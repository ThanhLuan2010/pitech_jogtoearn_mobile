import {StyleSheet} from 'react-native';
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
    marginTop: 20,
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
  image: {
    width: 84,
    height: 84,
    borderRadius: 8,
    marginLeft: 8,
  },
  news:{
    marginTop: 12, 
    borderRadius: 8,
    backgroundColor:VIOLET_TEXT
  }
});
