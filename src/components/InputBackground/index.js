import {Text, View, ImageBackground, TextInput, Image} from 'react-native';
import React, {Component} from 'react';
import images from '../../themes/Images';
import styles from './styles';
import Fonts from '../../themes/Fonts';

export class InputBackground extends Component {
  render() {
    const {width, placeholder = 'Input Text', style,bgStyle} = this.props;
    return (
      <View style={[{justifyContent: 'center'}, style]}>
        <Image resizeMode='stretch' source={images.backgroundInput} style={[styles.container,bgStyle]} />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'#41205E'}
          style={{position: 'absolute', marginHorizontal: 10, fontFamily:Fonts.playBold, color:'#CF6BFE'}}
        />
      </View>
    );
  }
}

export default InputBackground;
