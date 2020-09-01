import React, { Component, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { TextInput, Animated, View, StyleSheet, StatusBar, Text, ImageBackground } from 'react-native';
import { Button, H4, Flex, Spacing, P, Icon, Avatar } from '@uiw/react-native';
import { Akira } from 'react-native-textinput-effects';
import * as Animatable from 'react-native-animatable';

import Global from '../../global';
import conf from '../../config';

class SigninScreen extends Component {
  state = {
    hostType: '',
  };

  handleTextRef = (ref) => (this.text = ref);

  async componentDidMount() {
    const { navigation } = this.props;
    if (navigation && Global) {
      Global.navigation = navigation;
    }
    this._getHostType();
  }
  goToOptions = () => {
    this.props.navigation.navigate('DevOptions');
  };

  onChangeUserName = (text) => this.props.updateForm({ username: text });
  onChangePassWord = (text) => this.props.updateForm({ password: text });
  onSubmit = () => this.props.login();

  _getHostType = async () => {
    if (conf.production) {
      const productionOptions = conf.hosts.find((itm) => itm.type === 'production');
      await AsyncStorage.setItem('apihost', JSON.stringify(productionOptions));
    } else {
      const host = await AsyncStorage.getItem('apihost');
      this.setState({
        hostType: JSON.parse(host).type,
      });
    }
  };

  render() {
    const { formData, loading } = this.props;
    const { hostType } = this.state;
    const FadeInView = (props) => {
      const fadeAnim = useRef(new Animated.Value(0)).current; // 透明度初始值设为0

      React.useEffect(() => {
        Animated.timing(
          // 随时间变化而执行动画
          fadeAnim, // 动画中的变量值
          {
            toValue: 1, // 透明度最终变为1，即完全不透明
            duration: 3000, // 让动画持续一段时间
          },
        ).start(); // 开始执行动画
      }, [fadeAnim]);

      return (
        <Animated.View // 使用专门的可动画化的View组件
          style={{
            marginTop: '10%',
            borderRadius: 6,
            ...props.style,
            opacity: fadeAnim, // 将透明度绑定到动画变量值
          }}
        >
          {props.children}
        </Animated.View>
      );
    };

    return (
      <View style={styles.block}>
        <ImageBackground source={require('../../utils/img/denglu.png')} style={{ flex: 1 }}>
          <Flex align="center" direction="column" style={{ flex: 1 }}>
            <Animatable.Text
              style={{ fontSize: 28, fontWeight: '800', color: '#696969', paddingTop: '40%' }}
              animation="slideInDown"
              iterationCount={1}
              direction="alternate"
            >
              Sunflower Collection
            </Animatable.Text>
            <Akira
              style={{ width: 230, marginTop: '10%' }}
              label={'User Name'}
              borderColor={'#a5d1cc'}
              labelStyle={{ color: '#ac83c4' }}
              value={formData.username}
              onChangeText={this.onChangeUserName}
              maxLength={10}
              // clearButtonMode='always'
              color="#696969"
            />
            <Akira
              style={{ width: 230, marginTop: 10 }}
              label={'password'}
              borderColor={'#a5d1cc'}
              labelStyle={{ color: '#ac83c4' }}
              value={formData.password}
              onChangeText={this.onChangePassWord}
              maxLength={6}
              // clearButtonMode='always'
              color="#696969"
              secureTextEntry
            />
            <FadeInView style={{ width: 100, height: 45, backgroundColor: '#66a5d1cc' }}>
              <Text onPress={this.onSubmit} style={{ fontSize: 20, textAlign: 'center', margin: 10 }}>
                {' '}
                Sign In
              </Text>
            </FadeInView>
          </Flex>
        </ImageBackground>
      </View>
    );
  }
}

export default connect(
  ({ loading, global, users }) => ({
    loading: loading.effects.users,
    token: global.token,
    formData: users.formData,
  }),
  ({ users }) => ({
    login: users.login,
    update: users.update,
    updateForm: users.updateForm,
  }),
)(SigninScreen);

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#2F2F2F',
  },
  setting: {
    marginRight: 16,
  },
  header: {
    paddingTop: '30%',
    paddingBottom: 50,
  },
  titie: {
    color: '#f4c900',
    marginTop: 26,
    marginBottom: 0,
  },
  description: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 0,
    fontWeight: '200',
  },
  input: {
    width: 220,
    backgroundColor: 'rgba(178,178,178,0.4)',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    color: '#fff',
    fontSize: 16,
  },
  button: {
    // marginTop: 10,
    paddingHorizontal: 35,
    paddingVertical: 4,
    backgroundColor: 'rgba(178,178,178,0.4)',
  },
  hostNotice: {
    right: -60,
    top: -30,
    width: 40,
    height: 20,
    borderRadius: 3,
    overflow: 'hidden',
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: '#FFCB00',
  },
});
