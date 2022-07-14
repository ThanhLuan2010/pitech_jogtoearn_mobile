import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import images from '../../themes/Images';
import styles from './styles';

class ButtonBackground extends Component {
  render() {
    const {style, title = 'Text'} = this.props;
    return (
      <TouchableOpacity>
        <ImageBackground
          source={images.btn_purple}
          style={[styles.container, style]}
          resizeMode='stretch'>
          <Text style={styles.title}>{title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default ButtonBackground;
