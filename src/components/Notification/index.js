import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import styles from './style';
import images from '../../themes/Images';
import { SEEN_NOTIFY_BACKGROUND } from '../../themes/colors';
import {navigateToScreen} from '../../utils/navigator'

export default function Notification({item, componentId,disable=false}) {
  return (
    <TouchableOpacity disabled={disable} onPress={() => {
      navigateToScreen(componentId,'NotificationDetail')
    }} style={[styles.container,{backgroundColor:SEEN_NOTIFY_BACKGROUND}]}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={[styles.rowBetween, {flex: 1}]}>
        <View
          style={{
            flex: 1,
            marginLeft:16,
            height: 84,
            justifyContent:'space-between',
            paddingVertical:7
          }}>
          <View>
            <Text numberOfLines={1} style={styles.type}>{item.type}</Text>
            <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
          </View>
          <Text numberOfLines={1} style={styles.time}>{item.time}</Text>
        </View>
        <TouchableOpacity 
          style={styles.trashWrap}
        >
          <Image source={images.ic_trash} style={styles.ic_trash} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
