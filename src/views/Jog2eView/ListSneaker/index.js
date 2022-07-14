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
import {DropdownPicker, Sneaker} from '../../../components';

export class ListSneaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexTab: 0,
      progress: 0,
      isFilter: false,
    };
  }
  _renderItems = (item, index) => {
    const {data,componentId} = this.props;
    const {progress} = this.state;
    return <Sneaker componentId={componentId} item={item} index={index} data={data} />
  };

  render() {
    const {data} = this.props;
    const {isFilter} = this.state;
    return (
      <View>
        <View style={styles.rowBetween}>
          <Text style={styles.yourSneaker}>YOUR SNEAKER</Text>
          <TouchableOpacity
            onPress={()=>this.setState({
              isFilter:!isFilter
            })}
          >
            <Image
              source={isFilter ? images.ic_filter_active : images.ic_filter}
              style={{width: 28, height: 28}}
            />
          </TouchableOpacity>
        </View>
        {isFilter && (
          <View style={[styles.rowBetween, {marginHorizontal: 20}]}>
            <DropdownPicker placeholder={'Level'} style={styles.picker} />
            <DropdownPicker placeholder={'Rarity'} style={styles.picker} />
            <DropdownPicker placeholder={'Skin'} style={styles.picker} />
          </View>
        )}

        <View style={styles.container}>{data?.map(this._renderItems)}</View>
      </View>
    );
  }
}

export default ListSneaker;
