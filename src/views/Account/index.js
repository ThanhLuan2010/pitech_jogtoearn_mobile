import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {GradientButton, Headertitle} from '../../components';
import styles from './styles';
import images from '../../themes/Images';
import {navigateToScreen} from '../../utils/navigator';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#330066', '#330051', '#330033']}
        style={styles.container}>
        <Headertitle title="ACCOUNT" componentId={this.props.componentId} />

        <ScrollView style={{paddingHorizontal: 16}}>
          <View style={styles.infoWrap}>
            <ImageBackground
              source={images.frame_image}
              style={styles.frameAvata}>
              <Image
                source={{
                  uri: 'https://www.researchgate.net/profile/Hanhe-Lin/publication/344400221/figure/fig1/AS:940579932348417@1601263139233/SAN-and-Tarsier-on-the-baboon-image-from-Set-14-The-image-generated-by-SAN-is-visibly.ppm',
                }}
                style={styles.avatar}
              />
            </ImageBackground>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                marginHorizontal: 19,
              }}>
              <View style={styles.rowCenter}>
                <Text style={[styles.field, {flex: 1}]}>Email:</Text>
                <Text
                  numberOfLines={1}
                  style={[styles.fieldvalue, {flex: 2.5}]}>
                  Email@gmail.com
                </Text>
              </View>
              <View style={styles.rowCenter}>
                <Text style={[styles.field, {flex: 1}]}>Username:</Text>
                <Text
                  numberOfLines={1}
                  style={[styles.fieldvalue, {flex: 2.5}]}>
                  NguyenThanhLuan
                </Text>
              </View>
              <View style={styles.rowCenter}>
                <Text style={[styles.field, {flex: 1}]}>UserId</Text>
                <Text
                  numberOfLines={1}
                  style={[styles.fieldvalue, {flex: 2.5}]}>
                  123456
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigateToScreen(this.props.componentId, 'ProfileView')
              }>
              <Image source={images.ic_right} style={styles.ic_right} />
            </TouchableOpacity>
          </View>

          <View
            style={[styles.rowbetween, {paddingHorizontal: 10, marginTop: 32}]}>
            <View style={styles.rowCenter}>
              <Image source={images.ic_distance} style={styles.filedIcon} />
              <Text style={styles.rowtitle}>{'Total Distance'}</Text>
            </View>
            <TouchableOpacity>
              <Image source={images.ic_right} style={styles.ic_right} />
            </TouchableOpacity>
          </View>

          <View
            style={[styles.rowbetween, {paddingHorizontal: 10, marginTop: 32}]}>
            <View style={styles.rowCenter}>
              <Image source={images.ic_ref} style={styles.filedIcon} />
              <Text style={styles.rowtitle}>{'Your referal'}</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigateToScreen(this.props.componentId, 'Referal')}
            >
              <Image source={images.ic_right} style={styles.ic_right} />
            </TouchableOpacity>
          </View>

          <View
            style={[styles.rowbetween, {paddingHorizontal: 10, marginTop: 32}]}>
            <View style={styles.rowCenter}>
              <Image source={images.ic_history} style={styles.filedIcon} />
              <Text style={styles.rowtitle}>{'History'}</Text>
            </View>
            <TouchableOpacity
             onPress={() => navigateToScreen(this.props.componentId, 'History')}
            >
              <Image source={images.ic_right} style={styles.ic_right} />
            </TouchableOpacity>
          </View>

          <View
            style={[styles.rowbetween, {paddingHorizontal: 10, marginTop: 32}]}>
            <View style={styles.rowCenter}>
              <Image source={images.ic_tutorial} style={styles.filedIcon} />
              <Text style={styles.rowtitle}>{'Tutorial'}</Text>
            </View>
            <TouchableOpacity>
              <Image source={images.ic_right} style={styles.ic_right} />
            </TouchableOpacity>
          </View>

          <View
            style={[styles.rowbetween, {paddingHorizontal: 10, marginTop: 32}]}>
            <View style={styles.rowCenter}>
              <Image source={images.ic_support} style={styles.filedIcon} />
              <Text style={styles.rowtitle}>{'Support'}</Text>
            </View>
            <TouchableOpacity>
              <Image source={images.ic_right} style={styles.ic_right} />
            </TouchableOpacity>
          </View>

          <View
            style={[styles.rowbetween, {paddingHorizontal: 10, marginTop: 32}]}>
            <View style={styles.rowCenter}>
              <Image source={images.ic_version} style={styles.filedIcon} />
              <Text style={styles.rowtitle}>{'Version'}</Text>
            </View>
            <Text style={styles.version}>{'1.0.0'}</Text>
          </View>

          <GradientButton
            title={'Log out'}
            style={{height: 42, marginVertical: 62, paddingHorizontal: 16}}
          />
        </ScrollView>
      </LinearGradient>
    );
  }
}

export default Account;
