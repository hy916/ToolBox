// import React, { Component } from 'react';
// import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
// import { Avatar, Icon, List } from '@uiw/react-native';
// import { getUniqueID, getSystemName } from 'react-native-device-info';
// import { penyouquan, saoyisao, yaoyiyao, souyisou, gouwu, youxi, kanyikan, xiaochengxu, fujin, shiping } from '../../components/icons/signin';

// export default class MyScreen extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//         <ScrollView>
//           <List.Item style={{ borderBottomWidth: 0 }} extra={<Icon name="right" fill="#abb0b5" size={14} />} size="default" paddingLeft={15} onPress={() => {}}>
//             <View style={{ flexDirection: 'row' }}>
//               <Icon xml={penyouquan}></Icon>
//               <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>朋友圈</Text>
//             </View>
//           </List.Item>
//           <View style={{ marginVertical: 10 }}>
//             <List.Item
//               style={{ borderBottomWidth: 0 }}
//               extra={<Icon name="right" fill="#abb0b5" size={14} />}
//               size="default"
//               paddingLeft={15}
//               onPress={() => {}}
//             >
//               <View style={{ flexDirection: 'row' }}>
//                 <Icon xml={shiping}></Icon>
//                 <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>视频号</Text>
//               </View>
//             </List.Item>
//           </View>
//           <List.Item
//             style={{ borderBottomWidth: 0 }}
//             extra={<Icon name="right" fill="#abb0b5" size={14} />}
//             size="default"
//             paddingLeft={15}
//             onPress={() => {}}
//             style={{ borderBottomWidth: 0.3 }}
//           >
//             <View style={{ flexDirection: 'row' }}>
//               <Icon xml={saoyisao}></Icon>
//               <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>扫一扫</Text>
//             </View>
//           </List.Item>
//           <List.Item style={{ borderBottomWidth: 0 }} extra={<Icon name="right" fill="#abb0b5" size={14} />} size="default" paddingLeft={15} onPress={() => {}}>
//             <View style={{ flexDirection: 'row' }}>
//               <Icon xml={yaoyiyao}></Icon>
//               <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>摇一摇</Text>
//             </View>
//           </List.Item>
//           <View style={{ marginVertical: 10 }}>
//             <List.Item
//               style={{ borderBottomWidth: 0 }}
//               extra={<Icon name="right" fill="#abb0b5" size={14} />}
//               size="default"
//               paddingLeft={15}
//               onPress={() => {}}
//               style={{ borderBottomWidth: 0.3 }}
//             >
//               <View style={{ flexDirection: 'row' }}>
//                 <Icon xml={kanyikan}></Icon>
//                 <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>看一看</Text>
//               </View>
//             </List.Item>
//             <List.Item
//               style={{ borderBottomWidth: 0 }}
//               extra={<Icon name="right" fill="#abb0b5" size={14} />}
//               size="default"
//               paddingLeft={15}
//               onPress={() => {}}
//             >
//               <View style={{ flexDirection: 'row' }}>
//                 <Icon xml={souyisou}></Icon>
//                 <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>搜一搜</Text>
//               </View>
//             </List.Item>
//           </View>
//           <List.Item style={{ borderBottomWidth: 0 }} extra={<Icon name="right" fill="#abb0b5" size={14} />} size="default" paddingLeft={15} onPress={() => {}}>
//             <View style={{ flexDirection: 'row' }}>
//               <Icon xml={fujin}></Icon>
//               <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>附近的人</Text>
//             </View>
//           </List.Item>
//           <View style={{ marginVertical: 10 }}>
//             <List.Item
//               style={{ borderBottomWidth: 0 }}
//               extra={<Icon name="right" fill="#abb0b5" size={14} />}
//               size="default"
//               paddingLeft={15}
//               onPress={() => {}}
//               style={{ borderBottomWidth: 0.3 }}
//             >
//               <View style={{ flexDirection: 'row' }}>
//                 <Icon xml={gouwu}></Icon>
//                 <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>购物</Text>
//               </View>
//             </List.Item>
//             <List.Item
//               style={{ borderBottomWidth: 0 }}
//               extra={<Icon name="right" fill="#abb0b5" size={14} />}
//               size="default"
//               paddingLeft={15}
//               onPress={() => {}}
//             >
//               <View style={{ flexDirection: 'row' }}>
//                 <Icon xml={youxi}></Icon>
//                 <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>游戏</Text>
//               </View>
//             </List.Item>
//           </View>
//           <List.Item style={{ borderBottomWidth: 0 }} extra={<Icon name="right" fill="#abb0b5" size={14} />} size="default" paddingLeft={15} onPress={() => {}}>
//             <View style={{ flexDirection: 'row' }}>
//               <Icon xml={xiaochengxu}></Icon>
//               <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 5 }}>小程序</Text>
//             </View>
//           </List.Item>
//         </ScrollView>
//       </SafeAreaView>
//     );
//   }
// }

import React, { Component } from 'react';

import { StyleSheet, Text, TouchableOpacity, View, Button, BackHandler } from 'react-native';

import Video from 'react-native-video';

function formatTime(second) {
  let h = 0,
    i = 0,
    s = parseInt(second);
  if (s > 60) {
    i = parseInt(s / 60);
    s = parseInt(s % 60);
  }
  // 补零
  let zero = function (v) {
    return v >> 0 < 10 ? '0' + v : v;
  };
  console.log([zero(h), zero(i), zero(s)].join(':'));
  // return [zero(h), zero(i), zero(s)].join(":");
  return zero(s);
}

export default class VideoScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    paused: true,
  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }

  onBackAndroid = () => {
    this.props.navigation.goBack();
    return true;
  };

  onLoad = (data) => {
    this.setState({ duration: data.duration });
    console.log(data.duration + 'xxx');
  };

  onProgress = (data) => {
    this.setState({ currentTime: data.currentTime });
    console.log(data.currentTime + 'hhh');
  };

  onEnd = () => {
    this.setState({ paused: true });
  };

  onAudioBecomingNoisy = () => {
    this.setState({ paused: true });
  };

  // onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
  //   this.setState({ paused: !event.hasAudioFocus })
  // };

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }
    return 0;
  }

  renderRateControl(rate) {
    const isSelected = this.state.rate === rate;

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ rate });
        }}
      >
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>{rate}x</Text>
      </TouchableOpacity>
    );
  }

  renderResizeModeControl(resizeMode) {
    const isSelected = this.state.resizeMode === resizeMode;

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ resizeMode });
        }}
      >
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>{resizeMode}</Text>
      </TouchableOpacity>
    );
  }

  renderVolumeControl(volume) {
    const isSelected = this.state.volume === volume;

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ volume });
        }}
      >
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>{volume * 100}%</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.fullScreen} onPress={() => this.setState({ paused: !this.state.paused })}>
          <Video
            // ref={(ref: Video) => {
            //   this.video = ref
            // }}
            source={{
              uri:
                'https://gslb.miaopai.com/stream/HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__.mp4?ssig=bbabfd7684cae53660dc2d4c2103984e&time_stamp=1533631567740&cookie_id=&vend=1&os=3&partner=1&platform=2&cookie_id=&refer=miaopai&scid=HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__',
              type: 'mpd',
            }}
            // source={require('../../assets/background.mp4')}
            style={styles.fullScreen}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            // onAudioFocusChanged={this.onAudioFocusChanged}
            repeat={false}
          />
        </TouchableOpacity>
        <View style={styles.textStyle}>
          <Text style={styles.volumeControl}>{formatTime(this.state.duration - this.state.currentTime)}</Text>

          <Button
            style={styles.btnStyle}
            title={'关闭广告'}
            color={'#73808080'}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
        </View>

        <View style={styles.controls}>
          <View style={styles.generalControls}></View>

          <View style={styles.trackingControls}>
            <View style={styles.progress}>
              <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
              <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textStyle: {
    paddingLeft: 10,
    paddingTop: 25,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  btnStyle: {
    paddingRight: 10,
    paddingTop: 25,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    overflow: 'hidden',
    paddingTop: 10,
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    fontSize: 25,
    color: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
});
