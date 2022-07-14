import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {DEFAULT_HEADER} from '../../themes/headerOptions.js';
import {logout} from '../../redux/actions';
import {GradientButton, HeaderTopBar} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../themes/Images';
import {DARK, NORMAL} from '../../themes/colors';
import EmptyClub from './EmptyClub';

const listTab = [{title: 'Promotion'}, {title: 'Event'}, {title: 'News'}];

const clubInfo = [
  {title: 'Global Ranhking:'},
  {title: 'Language:'},
  {title: 'Clan Privacy:'},
  {title: 'Score:'},
  {title: 'Owner:'},
];
const ClubView = ({user, componentId}) => {
  const [indexTab, setindexTab] = useState(0);
  const [empty, setempty] = useState(false);

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

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#330066', '#330051', '#330033']}
      style={styles.container}>
      <HeaderTopBar style={styles.header} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{}}>
      {empty ? (
        <EmptyClub />
      ) : (
        <View style={{flex: 1}}>
          <Text style={styles.mode}>CLUB</Text>
          <View style={styles.listButton}>{listTab.map(_renderTab)}</View>

          <ImageBackground
            source={images.frame_image}
            style={styles.frame_image}>
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
              }}
              style={styles.childImage}
            />
          </ImageBackground>

          <View style={styles.memberWrap}>
            <Text style={[styles.mode, {fontSize: 16}]}>HAPPY CLUB</Text>
            <Text style={styles.menber}>Member: 15</Text>
          </View>

          <View style={{marginTop: 19}}>
            {clubInfo.map((item, index) => _renderClubInfo(item, index, info))}
          </View>

          <GradientButton
            title={'LEAVE CLUB'}
            size={'large'}
            style={styles.button}
          />
        </View>
      )}
      <View style={{height: 100}} />
      </ScrollView>
    </LinearGradient>
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
