import React from 'react';
import { StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import Global from '../../global';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    const { navigation, authToken } = this.props;
    if (navigation && Global) {
      Global.navigation = navigation;
    }
    authToken();
  }
  render() {
    const { token, loading, authState, children } = this.props;
    if (children && typeof children === 'function' && authState) {
      return children(token);
    }
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../utils/img/03.png')} style={{ flex: 1 }} />
      </SafeAreaView>
    );
  }
}

export default connect(
  ({ global, loading }) => ({
    token: global.token,
    authState: global.authState,
    loading: loading.effects.global.authToken,
  }),
  ({ global }) => ({
    updateState: global.update,
    authToken: global.authToken,
  }),
)(AuthLoadingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2F2F',
  },
  header: {
    marginTop: 110,
  },
  title: {
    marginTop: 30,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});
