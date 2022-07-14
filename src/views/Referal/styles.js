import {StyleSheet} from 'react-native';
import {BORDER, COLOR_PRIMARY, NORMAL, VIOLET, WHITE} from '../../themes/colors';
import * as sizes from '../../constants/sizes';
import Fonts from '../../themes/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width:sizes.width*274.54/414
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  getLink:{
    color:VIOLET,
    fontSize:24,
    fontFamily:Fonts.playBold
  },
  content:{
    color:WHITE,
    fontSize:12,
    fontFamily:Fonts.play
  },
  button:{
    width:sizes.width*107.46/414
  },
  promotionWrap:{
    borderBottomWidth:1,
    width:'50%',
    paddingBottom:8,
    borderColor:BORDER,
    marginTop:30
  },
  promotiontxt:{
    color:VIOLET,
    fontFamily:Fonts.playBold,
  },
  itemcontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:4
  },
  title:{
    fontSize:12,
    color:VIOLET,
    fontFamily:Fonts.playBold,
  },
  value:{
    color:WHITE,
    fontSize:12,
    fontFamily:Fonts.playBold,
    borderLeftWidth:1,
    borderColor:NORMAL,
    width:sizes.width*63/414,
    textAlign:'center'
  },
  infoWrap:{
    flexDirection:'row',
    marginHorizontal:26,
    borderWidth:1,
    borderColor:NORMAL,
    marginTop:9
  },
  itemTitleWrap:{
    height: 32,
    alignItems:'center',
    justifyContent:'center',
    borderLeftWidth:1,
    borderColor:NORMAL,
    borderBottomWidth:1
  },
  itemTitle:{
    color:WHITE,
    fontSize:10,
    fontFamily:Fonts.playBold
  },
  itemValueContainer:{
    alignItems:'center',
    justifyContent:'center',
    borderLeftWidth:1,
    borderColor:NORMAL,
    backgroundColor:VIOLET,
    height:32
  },
  itemValue:{
    color:'#3D1E59',
    fontSize:10,
    fontFamily:Fonts.playBold
  }
});
