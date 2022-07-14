import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import {Headertitle, ExpBar, Frame, Notification} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import images from '../../themes/Images';

const data = {
  type: 'Promotion',
  title: 'Coin production make in',
  time: '1 day ago',
  image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
};

class NotificationDetail extends Component {
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
        <ScrollView>
          <View>
            <Notification item={data} disable />
          </View>

          <Frame style={styles.Frame}>
            <View style={{marginHorizontal: 16}}>
              <ImageBackground
                source={images.background_imageNotify}
                style={styles.framImage}
                >
                <Image
                  source={{uri: data.image}}
                  style={styles.image}
                  // resizeMode="cover"
                />
              </ImageBackground>

              <Text style={styles.type}>{data.type}</Text>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.time}>{data.time}</Text>
              <Text style={styles.content}>
                {
                  'Binance cryptocurrency market - The easiest way to know the last prices, coin market cap, token price charts, and 24h change of bitcoin and other altcoin, Binance cryptocurrency market - The easiest way to know the last prices, coin market cap, token price charts, and 24h change of bitcoin and other altcoin - Binance cryptocurrency market - The easiest way to know the last prices, coin market cap, token price charts, and 24h change of bitcoin and other altcoin - Binance cryptocurrency market - The easiest way to know the last prices, coin market cap, token price charts, and 24h change of bitcoin and other altcoin'
                }
              </Text>
            </View>
          </Frame>
        </ScrollView>
      </LinearGradient>
    );
  }
}

export default NotificationDetail;
