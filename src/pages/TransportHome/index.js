import React, { Component } from 'react';
import { View, Text, SafeAreaView, Alert, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Button, Icon, Flex } from '@uiw/react-native';
import { shebeiMC } from '../../components/icons/signin';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window'); //解构赋值 获取屏幕宽度

export default class MyScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={require('../../utils/img/10.png')} style={{ flex: 1 }}>
          <Swiper style={styles.wrapper}>
            <View style={styles.slide}>
              <Image resizeMode="stretch" style={styles.image} source={require('../../utils/img/01.png')} />
            </View>
            <View style={styles.slide}>
              <Image resizeMode="stretch" style={styles.image} source={require('../../utils/img/02.png')} />
            </View>
            <View style={styles.slide}>
              <Image resizeMode="stretch" style={styles.image} source={require('../../utils/img/03.png')} />
            </View>
            <View style={styles.slide}>
              <Image resizeMode="stretch" style={styles.image} source={require('../../utils/img/04.png')} />
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
    width: '100%',
    height: '0%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
