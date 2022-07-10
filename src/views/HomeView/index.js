import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, View, Platform, Text} from 'react-native';
import {connect} from 'react-redux';

import styles from './styles';
import {
  DEFAULT_HEADER,
  // HIDDEN_BOTTOM_TABS,
} from '../../themes/headerOptions.js';
import {logout} from '../../redux/actions';
import {mergeOptions} from '../../utils/navigator';
import {COLOR_PRIMARY} from '../../themes/colors';

const HomeView = ({user, componentId}) => {

  return (
    <SafeAreaView style={styles.container}>
    <Text>hihi</Text>

    </SafeAreaView>
  );
};
HomeView.options = props => {
  return {
    ...DEFAULT_HEADER,
  };
};
HomeView.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
