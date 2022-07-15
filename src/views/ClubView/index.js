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

const ClubView = ({user, componentId}) => {
<<<<<<< Updated upstream
=======
  const [indexTab, setindexTab] = useState(0);
  const [empty, setempty] = useState(true);

  const _renderTab = (item, index) => {
    return (
      <TouchableOpacity key={index} onPress={() => setindexTab(index)}>
        <ImageBackground
          source={
            indexTab === index
              ? images.ic_buttonPuple_active
              : images.ic_buttonPuple
          }
          style={styles.ic_buttonPuple}>
          <Text style={styles.tabbuttonText}>{item.title.toUpperCase()}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const _renderClubInfo = (item, index, info) => {
    const value =
      index === 0
        ? info.globalRanhking
        : index === 1
        ? info.language
        : index === 2
        ? info.Privacy
        : index === 3
        ? info.score
        : index === 4
        ? info.owner
        : '';

    return (
      <View
        style={[
          styles.infoItem,
          {backgroundColor: index % 2 === 0 ? NORMAL : DARK},
        ]}>
        <Text style={styles.infoTitle}>{item.title}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    );
  };

  const info = {
    globalRanhking: 123456,
    language: 'English',
    Privacy: 'Open',
    score: 13132,
    owner: 'Jackie',
  };
>>>>>>> Stashed changes

  return (
    <SafeAreaView style={styles.container}>
      <View />

    </SafeAreaView>
  );
};
ClubView.options = props => {
  return {
    ...DEFAULT_HEADER,
  };
};
ClubView.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ClubView);
