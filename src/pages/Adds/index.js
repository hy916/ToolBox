import React, { Component } from 'react';
import { Button, List, Icon } from '@uiw/react-native';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, RefreshControl } from 'react-native';

export default class MyScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ height: 200, backgroundColor: 'red', borderBottomStartRadius: 100, borderBottomEndRadius: 100 }}></View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  ib: {
    flex: 1,
    position: 'relative',
    width: '100%',
    backgroundColor: 'red',
  },
  bg: {
    width: '100%',
    height: 190,
    opacity: 0.6,
    resizeMode: 'stretch',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  bt: {
    position: 'absolute',
  },
});
