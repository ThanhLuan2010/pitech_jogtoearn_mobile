import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import {chi} from 'react';
import images from '../../themes/Images';
import LinearGradient from 'react-native-linear-gradient';

class Frame extends Component {
  render() {
    const {style,childStyle} = this.props
    return (
      <View style={style}>
        <Image source={images.frame_top} style={{width: '100%'}} />
        <View
          style={[{backgroundColor:'rgba(73, 36, 106,0.7)', borderWidth:1,borderColor:'#E8C3FF',},childStyle]}>
          {this.props.children}
        </View>
        <Image source={images.frame_bottm} style={{width: '100%'}} />
      </View>
    );
  }
}

export default Frame;
