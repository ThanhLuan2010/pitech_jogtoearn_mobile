import {Text, View, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import images from '../../themes/Images';

export default class GradientButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      onPress = () => {},
      title,
      style,
      size = 'short',
      titleStyle,
      rightComponent,
    } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={style}>
          {/* border */}
          <View
            style={{
              elevation: 10,
              shadowColor: 'blue',
              backgroundColor: 'white',
              shadowOffset: {
                width: 10,
                height: 12,
              },
              shadowRadius: 16.0,
              elevation: 24,
              borderRadius: 20,
            }}>
            <LinearGradient
              colors={['#23A7FA', '#8C0ACC']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={[styles.linearGradient,{}]}>
              <View style={styles.innerContainer}>
                <LinearGradient
                  colors={['#23A7FA', '#8C0ACC']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.ChildlinearGradient}>
                  <Text style={[styles.title, titleStyle]}>{title}</Text>
                  {rightComponent && rightComponent}
                </LinearGradient>
              </View>
            </LinearGradient>
          </View>
        </View>
        {/* <ImageBackground
          source={
            size == 'short'
              ? images.backgroundButton
              : size == 'medium'
              ? images.backgroundButtonMedium
              : images.backgroundButtonLong
          }
          style={[style, styles.background]}
          resizeMode="contain">
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          {rightComponent && rightComponent}
        </ImageBackground> */}
      </TouchableOpacity>
    );
  }
}
