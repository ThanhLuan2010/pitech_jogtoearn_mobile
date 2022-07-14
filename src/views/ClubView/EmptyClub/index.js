import { Text, View, ImageBackground} from 'react-native'
import React, { Component } from 'react'
import images from '../../../themes/Images'
import styles from './styles'

class EmptyClub extends Component {
  render() {
    return (
     <ImageBackground
        source={images.bg_empty_club}
        style={styles.container}
        resizeMode='stretch'
     >

     </ImageBackground>
    )
  }
}

export default EmptyClub