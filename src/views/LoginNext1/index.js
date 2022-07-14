import React from 'react';
import PropTypes from 'prop-types';
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import images from '../../themes/Images';
import loading from '../../nativeModules/loading';
import LinearGradient from 'react-native-linear-gradient';
import {
  DEFAULT_HEADER_SMALL,
  HIDDEN_BOTTOM_TABS,
} from '../../themes/headerOptions';
import {loginLocal} from '../../redux/actions';
import {navigateToScreen} from '../../utils/navigator';
import scrollPersistTaps from '../../utils/scrollPersistTaps';
import {InputField, GradientButton} from '../../components';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {WHITE, VIOLET} from '../../themes/colors';
class LoginNext1 extends React.Component {
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
    }, 500);
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
      <ImageBackground source={images.splash} style={styles.background}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>
            {'> Please let me see the total step your phone detects'}
          </Text>
        </View>

          <GradientButton
            title={'Allow Motion & Fitness'}
            style={styles.button}
            size={'long'}
            titleStyle={{fontSize: 16}}
            onPress={() => {
              const {componentId} = this.props;
              navigateToScreen(componentId, 'LoginNext2');
            }}
          />
      </ImageBackground>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginNext1);
