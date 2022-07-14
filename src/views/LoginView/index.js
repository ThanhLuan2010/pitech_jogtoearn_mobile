import React from 'react';
import PropTypes from 'prop-types';
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  ImageBackground,
  Text,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import images from '../../themes/Images';
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
import {height} from '../../constants/sizes';
import {InputField, GradientButton} from '../../components';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {WHITE, VIOLET} from '../../themes/colors';
import I18n from '../../i18n';
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
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'red',
          height: height,
        }}>
        <KeyboardAwareScrollView
          alwaysBounceVertical={true}
          {...scrollPersistTaps}
          behavior="position"
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={() => {
              Keyboard.dismiss();
            }}>
            <ImageBackground source={images.splash} style={styles.background}>
              <View style={styles.centerView}>
                <FastImage source={images.logo} style={styles.logo} />
                <Text style={styles.contentTxt}>
                  Keep jogging - Keep earning
                </Text>
                <Text style={styles.loginTxt}>LOGIN</Text>

                <InputField
                  placeholder="Email@gmail.com"
                  placeholderTextColor={WHITE}
                  style={{marginTop: 40}}
                />

                <InputField
                  placeholder="Password"
                  placeholderTextColor={WHITE}
                  style={{marginTop: 28}}
                />

                <Text style={styles.agree}>
                  By coutinuting, you agree to our{' '}
                  <Text style={{color: VIOLET}}>Terms of Use</Text>
                </Text>
                <GradientButton
                  title={I18n.t('Login')}
                  style={styles.loginButton}
                  onPress={() => {
                    const {componentId} = this.props;
                    navigateToScreen(componentId, 'LoginNext1');
                  }}
                />
              </View>
              <Text style={styles.getPass}>
                Forgot your password, get it back{' '}
                <Text style={styles.hear}>Here</Text>
              </Text>
            </ImageBackground>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
      </SafeAreaView>
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
