import {StyleSheet} from 'react-native';
import {height, width} from '../../constants/sizes';
import {WHITE, NEW_BACKGROUND, BORDER, VIOLET} from '../../themes/colors';
import Fonts from '../../themes/Fonts';

export default StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: NEW_BACKGROUND,
    paddingHorizontal: 12,
    // paddingbottom: 18,
    borderRadius: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
  item: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: '#3D1E59',
    width: (width - 56) / 2 - 10,
    paddingHorizontal: 10,
  },
  code: {
    fontFamily: Fonts.playBold,
    color: WHITE,
    fontSize: 16,
    marginBottom: 15,
    marginTop: 8,
  },
  exp: {
    color: WHITE,
    position: 'absolute',
    fontSize: 8.6,
    textAlign: 'center',
    fontFamily: Fonts.playBold,
  },
  miningStart: {
    color: VIOLET,
    fontSize: 12,
    fontFamily: Fonts.playBold,
    marginVertical: 8,
  },
  yourSneaker: {
    fontFamily: Fonts.playBold,
    color: WHITE,
    fontSize: 24,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 12,
  },
  picker: {
    width: width / 4,
    // height: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundSneaker: {
    width: (96.38 / 414) * width,
    height: (133/896)*height,
    padding: 10,
  },
  equipment: {
    width: (23.72 / 414) * width,
    height: (23.72 / 414) * width,
  },
  powerBar:{
    alignSelf:'center',
    borderWidth:0,
    backgroundColor:'#311847',
    borderRadius:20,
    padding:0,
    marginTop:19,
  },
  gradienStyle:{
    borderRadius:20,
  }
});
