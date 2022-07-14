import {Text, Image, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  ButtonBackground,
  Frame,
  Headertitle,
  InputBackground,
} from '../../components';
import styles from './styles';
import images from '../../themes/Images';

const info = [
  {title: 'Referral', value: 'AlexDuc'},
  {title: 'Referral code', value: '#123456'},
  {title: 'Time', value: '14/05/2022'},
  {title: 'Level', value: 'F1'},
];
export default class History extends Component {
  _renderInfo = (item, index) => {
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#081F36', '#7C2ABD']}
          style={styles.itemTitleWrap}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </LinearGradient>
        <View style={styles.itemValueContainer}>
          <Text style={styles.itemValue}>{item.value}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#33003B', '#330033']}
        style={styles.container}>
        <Headertitle title="HISTORY" componentId={this.props.componentId} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginHorizontal: 16}}>
          <View style={styles.rowbetween}>
            <View style={styles.promotionWrap}>
              <Text style={styles.promotiontxt}>Promotion</Text>
            </View>
            <View style={styles.rowCenter}>
                <View style={{backgroundColor:'#311847',width:120,height: 24,}}></View>
                <Image
                    source={images.ic_down}
                    style={{right:10}}
                />
            </View>
          </View>

          <View
            style={[styles.rowCenter, {alignSelf: 'center', marginTop: 10}]}>
            <InputBackground
              placeholder={'your link...'}
              bgStyle={styles.input}
            />
            <ButtonBackground style={styles.button} title="Coppy" />
          </View>

          <Frame childStyle={{minHeight: 381}} style={{marginTop:40}}>
            <View style={styles.infoWrap}>{info.map(this._renderInfo)}</View>
          </Frame>
          <View style={{height: 50}} />
        </ScrollView>
      </LinearGradient>
    );
  }
}
