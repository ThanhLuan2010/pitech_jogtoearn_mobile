import {StyleSheet} from 'react-native';
import * as sizes from '../../constants/sizes';
import {WHITE} from '../../themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  img: {
    width: sizes.width / 1.5,
    height: 60,
  },
});
