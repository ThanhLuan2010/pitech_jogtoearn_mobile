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
      <LinearGradient
        start={{x: 0, y: 0.1}}
        end={{x: 0, y: 1}}
        colors={['#8300B1', '#52036D', '#8300B1']}
        style={{marginTop: 12, borderRadius: 8}}>
        <TouchableOpacity
          key={index}
          style={{padding: 8, flexDirection: 'row', flex: 1}}>
          <Image
            source={{uri: item.image}}
            style={styles.itemImage}
          />
          <View
            style={{flex: 1, marginLeft: 16, justifyContent: 'space-between'}}>
            <Text numberOfLines={3} style={styles.newTitle}>{item.title}</Text>
            <Text numberOfLines={1} style={styles.newTime}>{item.time}</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  render() {
    const {data} = this.props;
    const {indexTab} = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.news}>NEWS</Text>
          <View style={styles.rowCenter}>
            <TouchableOpacity
              onPress={() => this.setState({indexTab: 0})} 
              style={[
                styles.tabButton,
                {
                  backgroundColor: indexTab === 0 ? '#49246A' : '#241235',
                  marginRight: 16,
                  borderWidth: indexTab === 0 ? 0 : 1,
                },
              ]}>
              <Text style={styles.tabbuttonText}>Promotion</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({indexTab: 1})}
              style={[
                styles.tabButton,
                {
                  backgroundColor: indexTab === 1 ? '#49246A' : '#241235',
                  borderWidth: indexTab === 1 ? 0 : 1,
                },
              ]}>
              <Text style={styles.tabbuttonText}>Event</Text>
            </TouchableOpacity>
          </View>
        </View>
        {data?.map(this._renderItems)}
      </View>
    );
  }
}

export default ListNews;
