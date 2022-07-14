import {StyleSheet, Pressable, View, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {VIOLET} from '../../themes/colors';

export default function GradientSwitch(props) {
  const margin = useRef(new Animated.Value(0)).current;
  const [isOn, setIsOn] = useState(false);

  const onToggle = () => {
    const {width = 40, height = 20} = props
    setIsOn(true);
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(margin, {
      toValue: width/2,
      duration: 300,
    }).start();
  };

  const offToggle = () => {
    setIsOn(false);
    Animated.timing(margin, {
      toValue: 0,
      duration: 300,
    }).start();
  };

  const corlorOn = ['#E8C3FF', '#7000B5'];
  const colorOff = ['#081F36', '#8300B1'];
  const {width = 40, height = 20,style} = props
  return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={corlorOn}
        style={[styles.onToggle,style,{width:width,height: height,}]}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={!isOn ? colorOff:['transparent','transparent']}
          style={[styles.offToggle,{width:isOn?width :'97%'}]}>
          <Pressable onPress={!isOn ? onToggle : offToggle}>
          <Animated.View
            style={{
              height: height/1.5,
              width: height/1.5,
              borderRadius: 10,
              marginLeft: margin,
              backgroundColor: 'white',
            }}
          />
        </Pressable>
        </LinearGradient>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  onToggle: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems:'center'
  },
  offToggle: {
    borderRadius: 20,
    height: '95%',
    justifyContent: 'center',
    paddingLeft:2
  },
});
