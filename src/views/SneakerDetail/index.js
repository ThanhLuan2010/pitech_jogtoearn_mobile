import {Text, View, ScrollView, ImageBackground, Image} from 'react-native';
import React, {Component} from 'react';
import {Headertitle, ExpBar, PowerBar, GradientSwitch} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import images from '../../themes/Images';
import {
  PINK,
  POWER_GREEN_BORDER,
  POWER_PINK_BORDER,
  POWER_YELLOW_BORDER,
} from '../../themes/colors';

class SneakerDetail extends Component {
  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#330066', '#330051', '#330033']}
        style={styles.container}>
        <ScrollView>
          <View>
            <Headertitle title="SNEAKER" componentId={this.props.componentId} />
          </View>

          <ImageBackground source={images.frame_sneaker} style={styles.frame}>
            <ImageBackground
              source={images.backgroundSneaker}
              style={styles.backgroundSneaker}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/2872/2872601.png',
                }}
                style={styles.imageSneaker}
              />
            </ImageBackground>

            <GradientSwitch
              style={{marginTop:10}}
            />
          </ImageBackground>

          <View style={styles.infoWrap}>
            <View style={styles.rowCenter}>
              <ImageBackground
                style={styles.Equipment}
                source={images.Equipment_green}></ImageBackground>
              <ExpBar value={70} style={{marginLeft: 6}} />
            </View>

            <View style={[styles.rowCenter, {marginTop: 10}]}>
              <ImageBackground
                style={styles.Equipment}
                source={images.Equipment_red}></ImageBackground>
              <ExpBar
                value={4}
                duration={7}
                style={{marginLeft: 6}}
                label={'Show Mini'}
              />
            </View>

            <View style={styles.rowbetween}>
              <View>
                <View style={[styles.rowbetween, {marginTop: 10}]}>
                  <Text style={styles.infotitle}>Level:</Text>
                  <ImageBackground
                    style={[styles.Equipment]}
                    source={images.Equipment_green}></ImageBackground>
                </View>
                <View style={[styles.rowbetween, {marginTop: 10}]}>
                  <Text style={styles.infotitle}>Rarity:</Text>
                  <ImageBackground
                    style={styles.Equipment}
                    source={images.Equipment_yellow}></ImageBackground>
                </View>
              </View>

              <View>
                <View style={[styles.rowbetween, {marginTop: 10}]}>
                  <Text style={styles.infotitle}>Class:</Text>
                  <ImageBackground
                    style={styles.Equipment}
                    source={images.Equipment_blue}></ImageBackground>
                </View>
                <View style={[styles.rowbetween, {marginTop: 10}]}>
                  <Text style={styles.infotitle}>Skin:</Text>
                  <ImageBackground
                    style={styles.Equipment}
                    source={images.Equipment_blue}></ImageBackground>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.powerWrap}>
            <Text style={styles.powerTitle}>Attributes</Text>
            <View style={[styles.rowCenter, {marginTop: 12}]}>
              <ImageBackground
                style={styles.EquipmentBackground}
                source={images.Equipment_violet}>
                <Image
                  source={images.ic_power}
                  style={{width: 13.18, height: 18.82}}
                />
              </ImageBackground>

              <View
                style={{
                  flex: 1,
                  marginLeft: 12,
                  justifyContent: 'space-between',
                }}>
                <View style={[styles.rowbetween, {marginBottom: 2}]}>
                  <Text style={styles.powerpropsTitle}>{'Mining Power'}</Text>
                  <Text style={styles.powerpropsTitle}>3140</Text>
                </View>
                <PowerBar
                  Power={images.ic_powerPink}
                  Power_White={null}
                  style={{borderColor: POWER_PINK_BORDER, height: 23}}
                  value={3140}
                  styleItem={{width: 6.77, marginLeft: 1}}
                  width={'100%'}
                  duration={4000}
                />
              </View>
            </View>

            <View style={[styles.rowCenter, {marginTop: 12}]}>
              <ImageBackground
                style={styles.EquipmentBackground}
                source={images.Equipment_yellow}>
                <Image
                  source={images.ic_step}
                  style={{width: 13.63, height: 16.5}}
                />
              </ImageBackground>

              <View
                style={{
                  flex: 1,
                  marginLeft: 12,
                  justifyContent: 'space-between',
                }}>
                <View style={[styles.rowbetween, {marginBottom: 2}]}>
                  <Text style={styles.powerpropsTitle}>{'Step'}</Text>
                  <Text style={styles.powerpropsTitle}>3050</Text>
                </View>
                <PowerBar
                  Power={images.ic_power_yellow}
                  Power_White={null}
                  style={{borderColor: POWER_YELLOW_BORDER, height: 23}}
                  value={3050}
                  styleItem={{width: 6.77, marginLeft: 1}}
                  width={'100%'}
                  duration={4000}
                />
              </View>
            </View>

            <View style={[styles.rowCenter, {marginTop: 12}]}>
              <ImageBackground
                style={styles.EquipmentBackground}
                source={images.Equipment_green}>
                <Image
                  source={images.ic_star}
                  style={{width: 18.82, height: 18.82}}
                />
              </ImageBackground>

              <View
                style={{
                  flex: 1,
                  marginLeft: 12,
                  justifyContent: 'space-between',
                }}>
                <View style={[styles.rowbetween, {marginBottom: 2}]}>
                  <Text style={styles.powerpropsTitle}>{'Lucky'}</Text>
                  <Text style={styles.powerpropsTitle}>2500</Text>
                </View>
                <PowerBar
                  Power={images.ic_power_green}
                  Power_White={null}
                  style={{borderColor: POWER_GREEN_BORDER, height: 23}}
                  value={2500}
                  styleItem={{width: 6.77, marginLeft: 1}}
                  width={'100%'}
                  duration={4000}
                />
              </View>
            </View>
          </View>

          <View style={{height: 100}} />
        </ScrollView>
      </LinearGradient>
    );
  }
}

export default SneakerDetail;
