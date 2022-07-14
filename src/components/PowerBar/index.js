import {Text, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';

export class PowerBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemWidth:0
    };
  }

  UpdateRating(key) {
    this.setState({defaultPower: key});
  }

  getInfoComponent=(event)=>{
    const maxPower=32
   
    const _width = event.nativeEvent.layout.width/maxPower
    this.setState({
      itemWidth:_width-1 // chiều rộng mỗi ô bằng chìu dài thanh power/max(32) -  margin giữa 2 hình (1)
    })
  }
  render() {
    let PowerBar = [];
    const {
      style,
      Power = require('../../assets/powerGradient.png'),
      Power_White = require('../../assets/powerWhite.png') ,
      value = 0,
      styleItem,
      width=7*32,
      duration=0,
      childStile
    } = this.props
    const maxPower=32//full cây 32 ô

    const {itemWidth} = this.state

    for (var i = 1; i <= maxPower ; i++) {
      PowerBar.push(
        <View
          activeOpacity={0.7}
          key={i}
          >
          <Image
            style={[styles.PowerImage,styleItem,{width: itemWidth,}]}
            source={i <= value/duration*32 ? Power : Power_White}
            resizeMode='stretch'
          />
        </View>,
      );
    }
    return (
      <View onLayout={(event)=>this.getInfoComponent(event)} style={[styles.container,style,{width:width}]}>
        <View style={[styles.childView,childStile,{}]}>{PowerBar}</View>
      </View>
    );
  }
}

export default PowerBar;
