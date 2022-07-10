import { Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styles from './style'
import images from '../../themes/Images'

export default class GradientButton extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {onPress=()=>{}, title, style, size='short',titleStyle } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
      >
        <ImageBackground
          source={size == 'short' ? images.backgroundButton : size == 'medium'?images.backgroundButtonMedium: images.backgroundButtonLong}
          style={[style,styles.background]}
          resizeMode='contain'
        >
          <Text style={[styles.title,titleStyle]}>{title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

}
