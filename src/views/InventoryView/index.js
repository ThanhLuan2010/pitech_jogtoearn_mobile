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
import {DropdownPicker, GradientButton, HeaderTopBar} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../themes/Images';
import {DARK, NORMAL} from '../../themes/colors';
import ListSneaker from './ListSneaker';

const listTab = [{title: 'Promotion'}, {title: 'Event'}, {title: 'News'}];

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
const ClubView = ({user, componentId}) => {
  const [indexTab, setindexTab] = useState(0);

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

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#330066', '#330051', '#330033']}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <HeaderTopBar style={styles.header} />
        <Text style={styles.mode}>INVENTORY</Text>
        <View style={styles.listButton}>{listTab.map(_renderTab)}</View>

        <View style={[styles.rowBetween, {marginHorizontal: 20}]}>
          <DropdownPicker placeholder={'Level'} style={styles.picker} />
          <DropdownPicker placeholder={'Rarity'} style={styles.picker} />
          <DropdownPicker placeholder={'Skin'} style={styles.picker} />
        </View>

        <ListSneaker data={dataSneaker} />

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
