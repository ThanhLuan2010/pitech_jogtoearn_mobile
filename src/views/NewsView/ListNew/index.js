import {Text, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexTab: 0,
    };
  }
  _renderItems = (item, index) => {
    return (
      <View
        style={styles.news}>
        <TouchableOpacity
          key={index}
          style={{padding: 8, flexDirection: 'row',}}>
          <Image
            source={{uri: item.image}}
            style={styles.image}
          />
          <View
            style={{flex:1, marginLeft: 16, justifyContent: 'space-between'}}>
            <Text style={styles.newTitle}>{item.title}</Text>
            <Text style={styles.newTime}>{item.time}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {data} = this.props;
    return (
      <View style={styles.container}>
        {data?.map(this._renderItems)}
      </View>
    );
  }
}

export default ListNews;
