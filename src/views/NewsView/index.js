import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Platform,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {connect} from 'react-redux';

import styles from './styles';
import {
  DEFAULT_HEADER,
  // HIDDEN_BOTTOM_TABS,
} from '../../themes/headerOptions.js';
import {logout} from '../../redux/actions';
import {mergeOptions} from '../../utils/navigator';
import {COLOR_PRIMARY} from '../../themes/colors';
import {HeaderTopBar, InputField} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../themes/Images';
import {useState} from 'react';
import ListNew from './ListNew';

const listTab = [
  {title: 'Promotion'},
  {title: 'Event'},
  {title: 'News'},
  {title: 'Tutorial'},
];
const listNews = [
  {
    title: 'Sự Kiện Ra Mắt Nền Tảng JOG2E Tại Việt Nam',
    time: '24/03/2022  10:01',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    title: 'Sự Kiện Ra Mắt Nền Tảng JOG2E Tại Việt Nam',
    time: '24/03/2022  10:01',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    title: 'Sự Kiện Ra Mắt Nền Tảng JOG2E Tại Việt Nam',
    time: '24/03/2022  10:01',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    title: 'Sự Kiện Ra Mắt Nền Tảng JOG2E Tại Việt Nam',
    time: '24/03/2022  10:01',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
];
const NewsView = ({user, componentId}) => {
  const [indexTab, setindexTab] = useState(0);

  const _renderTab = (item, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => setindexTab(index)}
        style={[
          styles.tabButton,
          {
            backgroundColor: indexTab === index ? '#49246A' : '#241235',
            marginRight: 16,
            borderWidth: indexTab === index ? 0 : 1,
          },
        ]}>
        <Text style={styles.tabbuttonText}>{item.title}</Text>
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

        <Text style={styles.mode}>NEWS</Text>

        <View style={[styles.rowbetween, {marginTop: 30}]}>
          <Text style={styles.category}>DANH MỤC</Text>
          <InputField
            placeholder={'Tìm kiếm bài viết'}
            style={styles.searchInput}
            rightComponent={
              <TouchableOpacity>
                <Image
                  source={images.ic_search}
                  style={{width: 14.38, height: 14.38}}
                />
              </TouchableOpacity>
            }
          />
        </View>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{flexDirection: 'row', marginTop: 21}}>
          {listTab.map(_renderTab)}
        </ScrollView>

        <ListNew data={listNews} />
        <View style={{height: 100}} />
      </ScrollView>
    </LinearGradient>
  );
};
NewsView.options = props => {
  return {
    ...DEFAULT_HEADER,
  };
};
NewsView.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsView);
