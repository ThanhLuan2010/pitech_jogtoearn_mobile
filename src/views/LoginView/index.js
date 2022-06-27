import React from 'react';
import PropTypes from 'prop-types';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import loading from '../../nativeModules/loading';
import {
  DEFAULT_HEADER_SMALL,
  HIDDEN_BOTTOM_TABS,
} from '../../themes/headerOptions';
import {loginLocal} from '../../redux/actions';
import {navigateToScreen} from '../../utils/navigator';
import scrollPersistTaps from '../../utils/scrollPersistTaps';

import styles from './styles';
class LoginView extends React.Component {
  static options() {
    return {
      ...DEFAULT_HEADER_SMALL,
      ...HIDDEN_BOTTOM_TABS,
    };
  }

  static propTypes = {
    componentId: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: 'testf0@gmail.com',
      password: '123123123',
      auth_code: '',
      method: 'customers',
      showToast: false,
      errorMessage: '',
      disabled: false,
      require_auth: false,
    };
    this.actionSignIn = this.actionSignIn.bind(this);
    this.navigateToRegister = this.navigateToRegister.bind(this);
  }

  componentDidMount() {
    loading.showLoading();
    setTimeout(() => {
      loading.hideLoading();
    }, 5000);
  }

  navigateToRegister = () => {
    const {componentId} = this.props;
    navigateToScreen(componentId, 'RegisterView');
  };

  actionSignIn = async () => {
    //TODO: call api Login then navigate to OnBoardView
  };
  dismissBottomToast = () => {
    this.setState({showToast: false});
  };

  render() {
    return (
      <KeyboardAwareScrollView
        alwaysBounceVertical={true}
        {...scrollPersistTaps}
        behavior="position"
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback
          // style={styles.container}
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View />
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    // languageStore: state.common.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginLocal: (params, onComplete, method) => {
      return dispatch(loginLocal(params, onComplete, method));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
