import { Text, View, ImageBackground} from 'react-native'
import React, { Component } from 'react'
import images from '../../../themes/Images'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'

class EmptyClub extends Component {
  render() {
    return (
      <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['rgb(48,53,94)', 'rgb(49,32,76)', 'rgb(34,20,48)']}
      style={styles.container}>

        <Text>JOIN A CLUB</Text>
        <Text>And get exclusive benefits:</Text>

      </LinearGradient>
    )
  }
}

export default EmptyClub