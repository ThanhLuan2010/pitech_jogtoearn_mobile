import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  View,
  Image,
  ImageBackground,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

import styles from './styles';
import {
  DEFAULT_HEADER,
  // HIDDEN_BOTTOM_TABS,
} from '../../themes/headerOptions.js';
import {logout} from '../../redux/actions';
import {mergeOptions} from '../../utils/navigator';
import {COLOR_PRIMARY, VIOLET, VIOLET_BOLD} from '../../themes/colors';
import {GradientButton, HeaderTopBar, Stroketext} from '../../components';
import images from '../../themes/Images';
import LinearGradient from 'react-native-linear-gradient';
import ListIncome from './ListIncome';
import ListNews from './ListNew';

const listIncomeData = [
  {id: 0, title: 'Yesterday income', coin: 109},
  {id: 1, title: 'Expecttive today income', coin: 251},
];

const listNews = [
  {
    title: 'Sự Kiện Ra Mắt Nền Tảng JOG2E Tại Việt Nam',
    time: '24/03/2022  10:01',
    image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
  },
  {
    title: 'Sự Kiện Ra Mắt Nền Tảng JOG2E Tại Việt Nam',
    time: '24/03/2022  10:01',
    image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
  },
  {
    title: 'Sự Kiện Ra Mắt Nền Tảng JOG2E Tại Việt Nam',
    time: '24/03/2022  10:01',
    image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
  },
  {
    title: 'Sự Kiện Ra Mắt Nền Tảng JOG2E Tại Việt Nam',
    time: '24/03/2022  10:01',
    image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
  },
];

const HomeView = ({user, componentId}) => {
  const JOG = '3.451';
  const sneaker = 251;
  return (
    <ImageBackground
      source={images.background_home}
      style={styles.background}
      resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <HeaderTopBar componentId={ componentId} style={styles.header} />

          <Stroketext
            style={styles.jog}
            title={JOG}
            color="#CF6BFE"
            width={104}
            height={46}
            stroke={VIOLET_BOLD}
            strokeWidth={1}
            fontSize={40}
          />
          <Text style={styles.step}>Step today</Text>

          <GradientButton
            size="medium"
            style={styles.button}
            title={'JOG2E'}
            titleStyle={{fontSize:16}}
            rightComponent={
              <View style={styles.icPlay}>
                <Image
                  source={images.ic_play}
                  style={{
                    width: 7,
                    height: 7,
                    resizeMode: 'contain',
                    left: 0.5,
                  }}
                />
              </View>
            }
          />

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['#081F36', '#8300B1']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>
              {'Invite a friend, get JOG2E\ncoin form their income'}
            </Text>
            <GradientButton
              style={styles.LinearGradientbutton}
              title={'Button'}
              titleStyle={{fontSize: 12}}
            />
          </LinearGradient>

          <ListIncome data={listIncomeData} />

          <View style={styles.market}>
            <View style={styles.marketLeft}>
              <Text style={styles.marketTitle}>Own Sneakers to get income</Text>
              <Text style={styles.marketContent}>
                Own your favorite sports shoes like on the marketplace to catch
                start jog2e and make profit everyday. Protect your health you
                and make money every day
              </Text>
              <Text style={styles.valueSneaker}>
                {sneaker} <Text style={styles.sneaker}>SNEAKER</Text>
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <GradientButton
                style={styles.buyCoinButton}
                title={'Buy coin'}
                titleStyle={{fontSize: 12}}
              />

              <TouchableOpacity style={styles.detailButton}>
                <Text style={styles.detailtxt}>MarketPlace</Text>
              </TouchableOpacity>
            </View>
          </View>

          <ListNews
            data={listNews}
          />
          <View style={{height: 100}} />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
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
