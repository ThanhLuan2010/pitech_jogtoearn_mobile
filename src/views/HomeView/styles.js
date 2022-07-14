import {StyleSheet} from 'react-native';
import {COLOR_PRIMARY, WHITE, VIOLET_TEXT, VIOLET} from '../../themes/colors';
import * as sizes from '../../constants/sizes';
import Fonts from '../../themes/Fonts';

export default StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  jog: {
    alignSelf: 'center',
    marginTop: 30,
  },
  step: {
    color: WHITE,
    textAlign: 'center',
    fontFamily: Fonts.play,
    fontSize: 14,
  },
  button: {
    width: 122,
    height: 36,
    alignSelf: 'center',
    marginTop: 18,
  },
  icPlay: {
    borderWidth: 1,
    borderColor: WHITE,
    borderRadius: 30,
    // width: 18,
    // height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    marginLeft: 5,
  },
  linearGradient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 16,
    marginTop: 30,
  },
  buttonText: {
    color: WHITE,
    fontFamily: Fonts.playBold,
    fontSize: 12,
  },
  LinearGradientbutton: {
    width: 74,
    height: 28,
  },
  buyCoinButton: {
    width: 67,
    height: 28,
    marginBottom:10
  },
  detailButton: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: WHITE,
    alignSelf: 'center',
  },
  detailtxt: {
    fontSize: 10,
    fontFamily: Fonts.playBold,
  },
  market:{
    flexDirection:'row',
    marginHorizontal:16,
    backgroundColor:VIOLET_TEXT,
    borderRadius:16, 
    padding:12,
    alignItems:'flex-end'
  },
  marketLeft:{
    flex:1,
    marginRight:15
  },
  marketTitle:{
    color:VIOLET,
    fontSize:18,
    fontFamily:Fonts.Aldrich
  },
  marketContent:{
    color:WHITE,
    fontSize:13,
    fontFamily:Fonts.play
  },
  valueSneaker:{
    fontFamily:Fonts.playBold,
    color:WHITE,
    fontSize:32
  },
  sneaker:{
    fontSize:16
  }
});
