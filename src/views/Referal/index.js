import {Text, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  ButtonBackground,
  Frame,
  Headertitle,
  InputBackground,
} from '../../components';
import styles from './styles';

const data = [
  {title: 'Số member bên dưới bạn', value: 25},
  {title: 'Thu nhập member tuần này', value: 15},
  {title: 'Hoa hồng F1 tuàn này', value: 257},
  {title: 'Hoa hồng F2 tuàn này', value: 256},
  {title: 'Hoa hồng F3 tuàn này', value: 15},
  {title: 'Hoa hồng F4 tuàn này', value: 25},
  {title: 'Hoa hồng tuàn này', value: 213},
  {title: 'Hoa hồng tuàn trước', value: 254},
];

const info = [
  {title: 'Referral', value: 'AlexDuc'},
  {title: 'Referral code', value: '#123456'},
  {title: 'Time', value: '14/05/2022'},
  {title: 'Level', value: 'F1'},
];

class Referal extends Component {
  _renderTable = (item, index) => {
    return (
      <View
        style={[
          styles.itemcontainer,
          {backgroundColor: index % 2 === 0 ? '#41205E' : '#49246A'},
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.value}>{item.value}</Text>
      </View>
    );
  };

  _renderInfo = (item, index) => {
    return (
      <View style={{flex:1}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#081F36','#7C2ABD']}
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
        <Headertitle title="YOUR" componentId={this.props.componentId} />
        <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal: 16}}>
          <Text style={styles.getLink}>Share your link</Text>
          <Text style={styles.content}>
            Get your friends to join you, you will get JOG2E coin form their
            income
          </Text>
          <View
            style={[styles.rowCenter, {alignSelf: 'center', marginTop: 10}]}>
            <InputBackground
              placeholder={'your link...'}
              bgStyle={styles.input}
            />
            <ButtonBackground style={styles.button} title="Coppy" />
          </View>

          <View style={styles.promotionWrap}>
            <Text style={styles.promotiontxt}>Promotion</Text>
          </View>

          <View style={{marginTop: 21}}>{data.map(this._renderTable)}</View>

          <View style={styles.promotionWrap}>
            <Text style={styles.promotiontxt}>Member</Text>
          </View>

          <View
            style={[styles.rowCenter, {alignSelf: 'center', marginTop: 10, marginBottom:18}]}>
            <InputBackground
              placeholder={'Enter your wallwr here...'}
              bgStyle={styles.input}
            />
            <ButtonBackground style={styles.button} title="Search" />
          </View>

          <Frame childStyle={{minHeight:381}}>
            <View style={styles.infoWrap}>{info.map(this._renderInfo)}</View>
          </Frame>
          <View style={{height:50}}/>
        </ScrollView>
      </LinearGradient>
    );
  }
}

export default Referal;
