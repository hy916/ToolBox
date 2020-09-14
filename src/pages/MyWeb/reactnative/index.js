import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { WebView } from 'react-native-webview';

class ContractDetails extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          startInLoadingState
          mixedContentMode="always"
          source={{
            uri: 'https://reactnative.cn/',
          }}
        />
      </SafeAreaView>
    );
  }
}
export default connect()(ContractDetails);
