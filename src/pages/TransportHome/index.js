import React, { Component } from 'react';
import { View, Text, SafeAreaView, Alert, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Button, Icon, Flex } from '@uiw/react-native';
import { shebeiMC } from '../../components/icons/signin';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
// import CountDown from 'react-native-countdown';
// import Video from 'react-native-video';

const { width } = Dimensions.get('window'); //解构赋值 获取屏幕宽度

export default class MyScreen extends Component {
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    paused: true,
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={require('../../utils/img/10.png')} style={{ flex: 1 }}>
          {/* <Video
            // ref={(ref: Video) => { //方法对引用Video元素的ref引用进行操作
            //   this.video = ref
            // }}
            source={{ uri: 'https://gslb.miaopai.com/stream/HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__.mp4?ssig=bbabfd7684cae53660dc2d4c2103984e&time_stamp=1533631567740&cookie_id=&vend=1&os=3&partner=1&platform=2&cookie_id=&refer=miaopai&scid=HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__', type: 'mpd' }}
            // source={require('../../background.mp4')}//设置视频源  
            style={styles.fullScreen}//组件样式
            rate={this.state.rate}//播放速率
            paused={this.state.paused}//暂停
            volume={this.state.volume}//调节音量
            muted={this.state.muted}//控制音频是否静音
            resizeMode={this.state.resizeMode}//缩放模式
            onLoad={this.onLoad}//加载媒体并准备播放时调用的回调函数。
            onProgress={this.onProgress}//视频播放过程中每个间隔进度单位调用的回调函数
            onEnd={this.onEnd}//视频播放结束时的回调函数
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}//音频变得嘈杂时的回调 - 应暂停视频
            onAudioFocusChanged={this.onAudioFocusChanged}//音频焦点丢失时的回调 - 如果焦点丢失则暂停
            repeat={false}//确定在到达结尾时是否重复播放视频。
          /> */}
          <Swiper style={styles.wrapper} autoplay showsPagination={false} autoplayTimeout={2}>
            <View style={styles.slide}>
              <Image resizeMode="stretch" style={styles.image} source={require('../../utils/img/666.png')} />
            </View>
            <View style={styles.slide}>
              <Image resizeMode="stretch" style={styles.image} source={require('../../utils/img/30.png')} />
            </View>
            <View style={styles.slide}>
              <Image resizeMode="stretch" style={styles.image} source={require('../../utils/img/28.png')} />
            </View>
            <View style={styles.slide}>
              <Image resizeMode="stretch" style={styles.image} source={require('../../utils/img/25.png')} />
            </View>
            <View style={styles.slide}>
              <Image resizeMode="stretch" style={styles.image} source={require('../../utils/img/26.png')} />
            </View>
          </Swiper>
          <ScrollView></ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '60%',
  },
});
