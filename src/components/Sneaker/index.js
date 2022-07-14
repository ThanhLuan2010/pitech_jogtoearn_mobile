import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import AnimatedBar from 'react-native-animated-bar';
import styles from './style';
import images from '../../themes/Images';
import {navigateToScreen} from '../../utils/navigator';
import {ExpBar, GradientSwitch} from '../../components';
import {height, width} from '../../constants/sizes';

export default function Sneaker({item, index, data, componentId}) {
  return (
    <TouchableOpacity
      onPress={() => navigateToScreen(componentId, 'SneakerDetail')}
      key={index}
      style={[styles.item, {marginBottom: index === data.length - 1 ? 10 : 0}]}>
      <Text style={styles.code}>{item.code}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <ImageBackground
          source={images.backgroundSneaker}
          resizeMode="contain"
          style={styles.backgroundSneaker}>
          <Image
            source={{uri: item.image}}
            style={{width: '100%', height: '100%', alignSelf: 'center'}}
            resizeMode="contain"
          />
        </ImageBackground>
        <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
          <ImageBackground
            source={images.Equipment_green}
            style={styles.equipment}></ImageBackground>

          <ImageBackground
            source={images.Equipment_yellow}
            style={styles.equipment}></ImageBackground>

          <ImageBackground
            source={images.Equipment_blue}
            style={styles.equipment}></ImageBackground>
          <ImageBackground
            source={images.Equipment_blue}
            style={styles.equipment}></ImageBackground>
          {/* <Image source={images.ic_switch} /> */}
          <GradientSwitch
            width={(width * 38) / 414}
            height={(height * 20) / 896}
          />
        </View>
      </View>

        <ExpBar
          width={(width * 143) / 414}
          height={13}
          duration={100}
          value={40}
          style={styles.powerBar}
          gradienStyle={styles.gradienStyle}
          color={['#E8C4FF', '#7000B5']}
          end={{x: 0, y: 1}}
        />

      <Text style={styles.miningStart} numberOfLines={1}>
        Mining Start: {item.miningStart}
      </Text>
    </TouchableOpacity>
  );
}
