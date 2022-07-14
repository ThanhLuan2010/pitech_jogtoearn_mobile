import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import images from '../../themes/Images';
import styles from './styles';
import {goBack} from '../../utils/navigator';

class Headertitle extends Component {
  render() {
    const {title, titleStyle, rightComponent,componentId} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={()=>goBack(componentId)}
        >
          <Image source={images.ic_back} style={styles.ic_back} />
        </TouchableOpacity>

        <Text style={[titleStyle, styles.title]}>{title}</Text>
        {rightComponent ? rightComponent : <View style={{width: 32}} />}
      </View>
    );
  }
}

export default Headertitle;
