import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import images from '../../themes/Images';
import styles from './style';
import {goBack, navigateToScreen} from '../../utils/navigator';

class HeaderTopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {style, componentId} = this.props;
    const avatar = null;
    const name = 'Michael';
    return (
      <View style={[styles.container, style]}>
        <TouchableOpacity
          onPress={() => navigateToScreen(componentId, 'Account')}
          style={styles.rowCenter}>
          <Image
            source={avatar ? {uri: avatar} : images.ic_avatar_default}
            style={styles.avatar}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.name}>Hi, {name}</Text>
            <Text style={styles.welcome}>Welcome to JOG2E</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.rowCenter}>
          <View style={styles.point}>
            <Image
              style={{width: 16, height: 13, marginRight: 4}}
              source={images.ic_e}
              resizeMode="contain"
            />
            <Text style={styles.pointValue}>13.5</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigateToScreen(componentId, 'Notification')}
            style={styles.bell}>
            <Image style={{}} source={images.ic_bell} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default HeaderTopBar;
