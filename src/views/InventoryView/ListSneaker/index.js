import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Switch,
} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../../themes/Images';
import AnimatedBar from 'react-native-animated-bar';
import {DropdownPicker,Sneaker} from '../../../components';

export class ListSneaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexTab: 0,
      progress: 0,
    };
  }
  _renderItems = (item, index) => {
    const {data} = this.props;
    const {progress} = this.state;
    return <Sneaker item={item} index={index} data={data} />
  };

  render() {
    const {data} = this.props;
    return (
      <View style={{marginTop:32}}>
        <View style={styles.container}>{data?.map(this._renderItems)}</View>
      </View>
    );
  }
}

export default ListSneaker;
