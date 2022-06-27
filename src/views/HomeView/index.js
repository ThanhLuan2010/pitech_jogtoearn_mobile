import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, View, Platform} from 'react-native';
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
  React.useEffect(() => {
    mergeOptions(componentId, {
      topBar: {
        title: {
          text: 'HomeView',
        },
        ...Platform.select({
          ios: {
            background: {
              color: COLOR_PRIMARY,
            },
          },
        }),
      },
    });

    return () => {
      // cleanup
    };
  }, [componentId, user]);

  return (
    <SafeAreaView style={styles.container}>
      <View />

      {/* <BottomTabs /> */}
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
