import {StyleSheet} from 'react-native'
import { WHITE } from '../../themes/colors'
import Fonts from '../../themes/Fonts'

export default StyleSheet.create({
    background:{
       resizeMode:'contain',
       alignItems:'center',
       justifyContent:'center'
    },
    title:{
        fontFamily:Fonts.Aldrich,
        fontSize:18, 
        color:WHITE
    },
    linearGradient: {
        height: '100%',
        width: '100%',
        borderRadius: 10, // <-- Outer Border Radius
        elevation: 10,
        justifyContent:'center'
    },
    innerContainer: {
        borderRadius: 8, // <-- Inner Border Radius
        flex: 1,
        margin: 1.7, // <-- Border Width
        backgroundColor: '#330066',
        justifyContent: 'center',
        top:0.06
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#cc2b5e',
        backgroundColor: 'transparent',
    },
    ChildlinearGradient: {
        flex: 1,
        borderRadius: 6,
        margin: 1.5,
        left: 0.2,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    }
})