import {StyleSheet} from 'react-native';
import * as sizes from '../../constants/sizes';
import {WHITE, VIOLET} from '../../themes/colors';
import Fonts from '../../themes/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  img: {
    width: sizes.width / 1.5,
    height: 60,
  },
  background: {
    flex: 1,
    height: sizes.height + 50,
  },
  logo: {
    height: 92,
    width: 114,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  centerView: {
    flex: 1,
    // alignItems:'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  loginTxt: {
    color: 'white',
    fontSize: 32,
    fontFamily: Fonts.playBold,
    marginTop: 26.5,
    textAlign: 'center',
  },
  contentTxt: {
    color: 'white',
    fontSize: 12,
    fontFamily: Fonts.playBold,
    marginTop: 8,
    textAlign: 'center',
  },
  agree: {
    color: WHITE,
    fontFamily: Fonts.playBold,
    textAlign: 'center',
    fontSize: 14,
    marginTop: 30,
  },
  loginButton: {
    alignSelf: 'center',
    marginTop: 20,
    paddingHorizontal: 24,
    paddingVertical: 5,
  },
  getPass: {
    bottom: 40,
    textAlign: 'center',
    color: WHITE,
    fontFamily: Fonts.playBold,
  },
  hear: {
    color: VIOLET,
  },
});
