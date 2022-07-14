import {Text, View, Animated} from 'react-native';
import React, {Component} from 'react';
import style from '../GradientButton/style';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.width = new Animated.Value(0);
  }
  componentDidMount() {
    const {
      duration = 100,
      value = 50,
      style,
      lable = 'Exp',
      height = 19,
      width = 185,
    } = this.props;
    Animated.timing(this.width, {
      toValue: width * (value / duration),
      duration: 1000,
    }).start();
  }
  render() {
    const {
      duration = 100,
      value = 50,
      style,
      lable = 'Exp',
      height = 19,
      width = 185,
      gradienStyle,
      color=['#A900FF', '#FF7DF8'],
      end={x: 1, y: 0}
    } = this.props;

    return (
      <View style={[styles.container, style, {height: height, width: width}]}>
        <Animated.View style={{height: '100%', width: this.width}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={end}
            colors={color}
            style={[styles.gradient,gradienStyle]}></LinearGradient>
        </Animated.View>
        <View style={styles.absolute}>
          <View />
          <Text
            style={[
              styles.lable,
            ]}>{`${lable}: ${value}/${duration}`}</Text>
          <View />
        </View>
      </View>
    );
  }
}
