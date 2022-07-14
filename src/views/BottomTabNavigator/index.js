import { Text, View, ImageBackground, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import images from '../../themes/Images'
import styles from './style'
import Jog2eView from '../Jog2eView';
import Inventory from '../InventoryView';
import ClubView from '../ClubView';
import NewsView from '../NewsView';
import HomeView from '../HomeView';

export class BottomTabNavigator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabIndex: 1
    }
  }

  renderBodyView = () => {
    switch (this.state.tabIndex) {
      case 1:
        return <HomeView componentId={this.props.componentId} />
      case 2:
        return <Jog2eView componentId={this.props.componentId}/>
      case 3:
        return <Inventory componentId={this.props.componentId}/>
      case 4:
        return <ClubView componentId={this.props.componentId}/>
      case 5:
        return <NewsView componentId={this.props.componentId}/>
      default:
        break;
    }
  }
  render() {
    const { tabIndex } = this.state
    console.log('==========props=========',this.props)
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {this.renderBodyView()}
        </View>
        {/* bottomBar */}
        <ImageBackground
          source={images.backgroundBottomBar}
          style={styles.bottom}
          resizeMode='contain'
        >
          <TouchableOpacity
            onPress={() => this.setState({ tabIndex: 1 })}
            style={{ flex: 1, alignItems: 'center' }}
          >
            <Image
              source={tabIndex === 1 ? images.ic_tabHome_active : images.ic_tabHome}
              style={styles.iconTab}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({ tabIndex: 2 })}
            style={{ flex: 1, alignItems: 'center' }}
          >
            <Image
              source={tabIndex === 2 ? images.ic_tabJog2e_active : images.ic_tabJog2e}
              style={[styles.iconTab,]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1, alignItems: 'center' }}
            onPress={() => this.setState({ tabIndex: 3 })}
          >
            <Image
              source={tabIndex === 3 ? images.ic_tabInventory_active : images.ic_tabInventory}
              style={[styles.iconTab,]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1, alignItems: 'center' }}
            onPress={() => this.setState({ tabIndex: 4 })}
          >
            <Image
              source={tabIndex === 4 ? images.ic_tabClub_active : images.ic_tabClub}
              style={styles.iconTab}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1, alignItems: 'center' }}
            onPress={() => this.setState({ tabIndex: 5 })}
          >
            <Image
              source={tabIndex === 5 ? images.ic_tabNews_active : images.ic_tabNews}
              style={styles.iconTab}
            />
          </TouchableOpacity>

        </ImageBackground>
      </SafeAreaView>
    )
  }
}

export default BottomTabNavigator