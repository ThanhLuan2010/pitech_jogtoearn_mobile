import {StyleSheet} from 'react-native';
import {COLOR_PRIMARY, WHITE} from '../../themes/colors';
import * as sizes from '../../constants/sizes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
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
});
