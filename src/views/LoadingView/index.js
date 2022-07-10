import React from 'react';
import {StatusBar, LogBox, View} from 'react-native';
import {connect} from 'react-redux';

import FastImage from 'react-native-fast-image';

import I18n from '../../i18n';
import {HIDDEN_TOP_BAR} from '../../themes/headerOptions';
import {setRoot, getListOfTab, setRootUser} from '../../utils/navigator';
import styles from './styles';
import Images from '../../themes/Images';

LogBox.ignoreAllLogs();

class LoadingView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    setTimeout(async () => {
      const {loggedIn, user, languageStore} = this.props;
      I18n.locale = 'vi';
      console.log(
        'loggedIn: componentDidMount',
        loggedIn,
        user,
        this.props.auth,
      );
      if (loggedIn) {
        const listOfTabs = await getListOfTab();
        setRootUser(listOfTabs);
      } else {
        setRoot('LoginView');
      }
    }, 3000);
    // if (!loggedIn) {
    //   setTimeout(async () => {
    //     const listOfTabs = await getListOfTab();
    //     // setRootUser(listOfTabs);
    //     setRoot('LoginView');
    //   }, 2000);
    // } else {
    //   if (user.role === 'customer') {
    //     setTimeout(() => {
    //       setRoot('HomeView');
    //     }, 2000);
    //   } else if (user.role === 'provider') {
    //     setTimeout(() => {
    //       setRoot('HomeProviderView');
    //     }, 2000);
    //   }
    // }
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <View style={styles.backgroundWrapper}>
          <FastImage
            source={Images.splash}
            style={styles.img}
            // resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      </>
    );
  }
}

LoadingView.options = {
  ...HIDDEN_TOP_BAR,
};

const mapStateToProps = state => ({
  loginMethod: state.auth.loginMethod,
  user: state.auth.user,
  token: state.auth.token,
  loggedIn: state.auth.loggedIn,
  auth: state.auth,
  languageStore: state.common.language,
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingView);
