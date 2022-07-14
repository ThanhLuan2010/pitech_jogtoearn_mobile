import {StyleSheet} from 'react-native';
import {BORDER, WHITE, VIOLET, POWER_BACKGROUND} from '../../themes/colors';
import * as sizes from '../../constants/sizes';
import Fonts from '../../themes/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  framImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: (sizes.height * 227.96) / 896,
    width: (sizes.width * 331.1) / 414,
    marginTop: 15,
  },
  Frame: {
    marginHorizontal: 16,
    marginTop: 32,
    marginBottom: 16,
  },
  image: {
    height: (sizes.height * 216.96) / 896,
    width: (sizes.width * 321.94) / 414,
    alignSelf:'center'
  },
  type: {
    marginTop: 25,
    fontFamily: Fonts.playBold,
    fontSize: 12,
    color: '#7000B5',
  },
  title: {
    color: WHITE,
    fontFamily: Fonts.Aldrich,
    fontSize: 18,
  },
  time: {
    color: VIOLET,
    fontSize: 10,
  },
  content: {
    color: '#F1F0F0',
    fontSize: 13,
    fontFamily: Fonts.play,
    marginTop: 22,
    marginBottom: 40,
  },
});
