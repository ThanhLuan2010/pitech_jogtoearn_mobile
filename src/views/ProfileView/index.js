import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  Text,
} from 'react-native';
import {connect} from 'react-redux';

import styles from './styles';
import {
  DEFAULT_HEADER,
  // HIDDEN_BOTTOM_TABS,
} from '../../themes/headerOptions.js';
import {logout} from '../../redux/actions';
import {mergeOptions} from '../../utils/navigator';
import {COLOR_PRIMARY} from '../../themes/colors';
import LinearGradient from 'react-native-linear-gradient';
import {
  ButtonBackground,
  GradientButton,
  Headertitle,
  InputBackground,
} from '../../components';
import images from '../../themes/Images';

const ProfileView = ({user, componentId}) => {
  const [fieldWidth, setFieldWidth] = useState(0);
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#33003B', '#330033']}
      style={styles.container}>
      <Headertitle title="PROFILE" componentId={componentId} />

      <View style={{flex: 1}}>
        <ImageBackground source={images.frame_image} style={styles.frameAvata}>
          <Image
            source={{
              uri: 'https://www.researchgate.net/profile/Hanhe-Lin/publication/344400221/figure/fig1/AS:940579932348417@1601263139233/SAN-and-Tarsier-on-the-baboon-image-from-Set-14-The-image-generated-by-SAN-is-visibly.ppm',
            }}
            style={styles.avatar}
          />
        </ImageBackground>
        <View style={{alignSelf: 'center', marginTop: 17}}>
          <View style={styles.rowCenter}>
            <Text style={[styles.field, {width: fieldWidth}]}>Email:</Text>
            <Text style={[styles.fieldvalue]}>Email@gmail.com</Text>
          </View>

          <View style={styles.rowCenter}>
            <Text
              onLayout={e => {
                setFieldWidth(e.nativeEvent.layout.width);
              }}
              style={[styles.field]}>
              User ID:
            </Text>
            <Text style={[styles.fieldvalue]}>123456</Text>
          </View>
        </View>

        <View style={[styles.rowCenter, {alignSelf: 'center', marginTop: 10}]}>
          <InputBackground
            placeholder={'Change name...'}
            bgStyle={styles.input}
          />
          <ButtonBackground style={styles.button} title="Save change" />
        </View>

        <View
          style={[styles.rowBetween, {marginHorizontal: 24, marginTop: 36}]}>
          <View style={styles.rowCenter}>
            <Image source={images.ic_changePass} style={styles.icon} />
            <Text style={styles.title}>Change Password</Text>
          </View>
          <TouchableOpacity>
            <Image source={images.ic_right} style={styles.ic_right} />
          </TouchableOpacity>
        </View>

        <View
          style={[styles.rowBetween, {marginHorizontal: 24, marginTop: 36}]}>
          <View style={styles.rowCenter}>
            <Image source={images.ic_finger} style={styles.icon} />
            <Text style={styles.title}>Google Authenticator</Text>
          </View>
          <TouchableOpacity>
            <Image source={images.ic_right} style={styles.ic_right} />
          </TouchableOpacity>
        </View>
      </View>

      <GradientButton
        title={'Delete Account'}
        style={{height: 42, marginVertical: 42, paddingHorizontal: 16}}
      />
    </LinearGradient>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    token: state.auth.token,
    loggedIn: state.auth.loggedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
