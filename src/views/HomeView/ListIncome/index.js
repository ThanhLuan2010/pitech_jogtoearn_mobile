import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {INCOME_BACKGROUND,VIOLET_TEXT} from '../../../themes/colors';
import styles from './styles';
import Fonts from '../../../themes/Fonts';

export class ListIncome extends Component {
  _renderItem = (item, index) => {
    return (
      <View style={styles.container} key={index}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.value}>{item.coin}  <Text style={{fontSize:18, fontFamily:Fonts.play}}>Coin</Text></Text>
        </View>

        <TouchableOpacity
            style={styles.detailButton}
        >
            <Text style={styles.detailtxt}>Detail</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    const {data} = this.props;
    return (
      <View style={{marginHorizontal: 16, marginTop: 8}}>
        {data?.map(this._renderItem)}
      </View>
    );
  }
}

export default ListIncome;
