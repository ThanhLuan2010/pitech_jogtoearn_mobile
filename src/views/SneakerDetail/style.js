import {StyleSheet} from 'react-native';
import {BORDER, WHITE,VIOLET,POWER_BACKGROUND} from '../../themes/colors';
import * as sizes from '../../constants/sizes';
import Fonts from '../../themes/Fonts';

export default StyleSheet.create({
    container:{
        flex:1,
        height: sizes.height,
    },
    frame:{
        width: 188.58,
        height: 210.72,
        alignSelf:'center',
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'
    },
    backgroundSneaker:{
        width: 94,
        height: 133,
        alignItems:'center',
        justifyContent:'center'
    },
    imageSneaker:{
        width:'90%',
        height: '50%',
    },
    infoWrap:{
        backgroundColor:'#1C0E29',
        alignSelf:'center',
        padding:8,
        borderRadius:10
    },
    rowCenter:{
        flexDirection:'row',
        alignItems:'center'
    },
    Equipment:{
        width:23,
        height: 23,
    },
    rowbetween:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    infotitle:{
        color:WHITE,
        fontFamily:Fonts.playBold,
        fontSize:12,
        marginRight:10,
    },
    powerWrap:{
        backgroundColor:POWER_BACKGROUND,
        marginHorizontal:16,
        alignItems:'center',
        marginTop:30,
        borderRadius:10,
        paddingHorizontal:16,
        paddingBottom:16
    },
    powerTitle:{
        color:WHITE,
        fontSize:20,
        fontFamily:Fonts.Aldrich,
        padding:8
    },
    powerpropsTitle:{
        color:WHITE,
        fontSize:12,
        fontFamily:Fonts.playBold
    },
    EquipmentBackground:{
        width: 40, 
        height: 40,
        justifyContent:'center',
        alignItems:'center'
    }
});
