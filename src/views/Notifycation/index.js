import {Text, View, ScrollView, ImageBackground, Image,FlatList} from 'react-native';
import React, {Component} from 'react';
import {Headertitle, ExpBar, PowerBar,Notification} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const data = [
  {
    type: 'Promotion',
    title: 'Coin production make in',
    time: '1 day ago',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    type: 'Promotion',
    title: 'Coin production make in',
    time: '1 day ago',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    type: 'Promotion',
    title: 'Coin production make in',
    time: '1 day ago',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    type: 'Promotion',
    title: 'Coin production make in',
    time: '1 day ago',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    type: 'Promotion',
    title: 'Coin production make in',
    time: '1 day ago',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    type: 'Promotion',
    title: 'Coin production make in',
    time: '1 day ago',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    type: 'Promotion',
    title: 'Coin production make in',
    time: '1 day ago',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    type: 'Promotion',
    title: 'Coin production make in',
    time: '1 day ago',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    type: 'Promotion',
    title: 'Coin production make in',
    time: '1 day ago',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    type: 'Promotion',
    title: 'Coin production make in',
    time: '1 day ago',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
];

class NotificationView extends Component {
  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#330066', '#330051', '#330033']}
        style={styles.container}>
        <Headertitle
          title="NOTIFICATION"
          componentId={this.props.componentId}
        />

        <FlatList
          style={{marginBottom:10}}
          data={data}
          renderItem={({item,index})=><Notification item={item} componentId={this.props.componentId}/>}
        />

      </LinearGradient>
    );
  }
}

export default NotificationView;
