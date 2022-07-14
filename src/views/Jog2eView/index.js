import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, View, Platform, Text, ScrollView} from 'react-native';
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
import {HeaderTopBar, PowerBar, GradientSwitch} from '../../components';
import ListSneaker from './ListSneaker';
import AnimatedBar from 'react-native-animated-bar';

const dataSneaker = [
  {
    code: '#123455',
    image: 'https://cdn-icons-png.flaticon.com/512/2872/2872601.png',
    exp: 50,
    miningStart: '234-1235',
  },
  {
    code: '#123455',
    image: 'https://cdn-icons-png.flaticon.com/512/2872/2872601.png',
    exp: 50,
    miningStart: '234-1235',
  },
  {
    code: '#123455',
    image: 'https://cdn-icons-png.flaticon.com/512/2872/2872601.png',
    exp: 50,
    miningStart: '234-1235',
  },
  {
    code: '#123455',
    image: 'https://cdn-icons-png.flaticon.com/512/2872/2872601.png',
    exp: 50,
    miningStart: '234-1235',
  },
  {
    code: '#123455',
    image: 'https://cdn-icons-png.flaticon.com/512/2872/2872601.png',
    exp: 50,
    miningStart: '234-1235',
  },
  {
    code: '#123455',
    image: 'https://cdn-icons-png.flaticon.com/512/2872/2872601.png',
    exp: 50,
    miningStart: '234-1235',
  },
  {
    code: '#123455',
    image: 'https://cdn-icons-png.flaticon.com/512/2872/2872601.png',
    exp: 50,
    miningStart: '234-1235',
  },
  {
    code: '#123455',
    image: 'https://cdn-icons-png.flaticon.com/512/2872/2872601.png',
    exp: 50,
    miningStart: '234-1235',
  },
  {
    code: '#123455',
    image: 'https://cdn-icons-png.flaticon.com/512/2872/2872601.png',
    exp: 50,
    miningStart: '234-1235',
  },
];

const Jog2e = (props) => {
  const step = 3.451;
  const totalMining = '23.324.231';
  return (
    <ScrollView>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#330066', '#330051', '#330033']}
        style={styles.container}>
        <HeaderTopBar style={styles.header} />

        <Text style={styles.mode}>BACKGROUD MODE</Text>
        <Text style={styles.valuestep}>
          {step} <Text style={styles.step}>SNEAKER</Text>
        </Text>

        <View style={styles.totalMining}>
          <Text style={styles.title}>{'Total Mining Power'}</Text>
          <Text style={styles.value}>{totalMining} </Text>
        </View>

        <View style={[styles.totalMining, {backgroundColor: '#7A2A8D'}]}>
          <Text style={styles.title}>{'Total Mining Power'}</Text>
          <Text style={styles.value}>{totalMining} </Text>
          <PowerBar value={30} duration={90} childStile={{right:1.1}} style={{marginTop: 10,borderColor:'white'}} />
        </View>

        <ListSneaker componentId={props.componentId} data={dataSneaker} />

        <View style={{height:100}}/>

      </LinearGradient>
    </ScrollView>
  );
};
Jog2e.options = props => {
  return {
    ...DEFAULT_HEADER,
  };
};
Jog2e.propTypes = {
  componentId: PropTypes.string,
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

export default connect(mapStateToProps, mapDispatchToProps)(Jog2e);
