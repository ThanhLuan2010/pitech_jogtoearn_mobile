import {StyleSheet} from 'react-native';
import {
  COLOR_PRIMARY,
  WHITE,
  VIOLET,
  VIOLET_TEXT,
  BORDER,
} from '../../themes/colors';
import * as sizes from '../../constants/sizes';
import Fonts from '../../themes/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  topView: {
    height: sizes.height / 2,
    paddingHorizontal: sizes.width / 5,
    backgroundColor: COLOR_PRIMARY,
  },
  imgAvatar: {
    width: sizes.width / 4,
    height: sizes.width / 4,
    borderRadius: sizes.width / 8,
  },
  header: {
    marginTop: 32,
  },
  mode: {
    color: VIOLET,
    fontFamily: Fonts.playBold,
    textAlign: 'center',
    fontSize: 24,
    marginTop: 24,
  },
  rowbetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderColor: BORDER,
  },
  tabbuttonText: {
    color: WHITE,
    fontSize: 10,
    fontFamily: Fonts.playBold,
  },
  ic_buttonPuple: {
    width: 106.24/414*sizes.width,
    height: 40/896*sizes.height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },
  childImage: {
    width: 172,
    height: 172,
  },
  frame_image: {
    width: 214,
    height: 214,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
  menber: {
    fontFamily: Fonts.play,
    color: WHITE,
    fontSize: 14,
  },
  memberWrap: {
    alignItems: 'center',
    borderBottomWidth: 1,
    width: 214,
    alignSelf: 'center',
    paddingBottom: 8,
    borderColor: BORDER,
  },
  infoItem: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 16,
    padding: 8,
  },
  infoTitle: {
    color: VIOLET,
    fontSize: 14,
    fontFamily: Fonts.playBold,
  },
  infoValue: {
    color: WHITE,
    fontSize: 14,
    fontFamily: Fonts.play,
  },
  button: {
    width: 187,
    height: 36,
    alignSelf:'center',
    marginVertical:50
  },
});
