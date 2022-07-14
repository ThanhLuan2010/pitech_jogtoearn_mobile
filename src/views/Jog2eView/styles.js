import {StyleSheet} from 'react-native';
import {COLOR_PRIMARY, WHITE, VIOLET, INCOME_BACKGROUND} from '../../themes/colors';
import * as sizes from '../../constants/sizes';
import Fonts from '../../themes/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:16
  },
  header: {
    marginTop: 32,
  },
  mode:{
    color:VIOLET,
    fontFamily:Fonts.playBold,
    textAlign:'center',
    fontSize:24, 
    marginTop:50
  },
  valuestep:{
    fontFamily:Fonts.playBold,
    color:WHITE,
    fontSize:28,
    textAlign:'center'
  },
  step:{
    fontSize:14
  },
  totalMining:{
    backgroundColor: INCOME_BACKGROUND,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 16,
    marginTop:16,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    color:WHITE,
    fontSize:14,
    fontFamily:Fonts.playBold
  },
  value:{
    color:WHITE,
    fontSize:24,
    fontFamily:Fonts.playBold
  }
});
