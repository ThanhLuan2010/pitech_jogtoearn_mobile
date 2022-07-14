import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './style';
import Svg, {Text} from 'react-native-svg';
import Fonts from '../../themes/Fonts';

class Stroketext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      stroke = 'black',
      strokeWidth = 0.3,
      color = 'white',
      fontSize = 20,
      title = '',
      style,
    } = this.props;
    return (
      <Svg height="46" width="100%" style={style}>
        <Text
          fill={color}
          strokeWidth={strokeWidth}
          stroke={stroke}
          fontSize={fontSize}
          fontFamily={Fonts.playBold}
          x='50%'
          y="30"
          textAnchor="middle">
          {title}
        </Text>
      </Svg>
    );
  }
}
export default Stroketext;
