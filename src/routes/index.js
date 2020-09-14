import React from 'react';
import { Icon, Button } from '@uiw/react-native';

import Home from '../pages/Home';
import TransportHome from '../pages/TransportHome';
import SignIn from '../pages/SignIn';
import DevOptions from '../pages/DevOptions';
import MyHomeSetting from '../pages/MyHome/Setting';
import Gesture from '../pages/MyHome/Gesture';
import OrderHome from '../pages/OrderHome';
import Adds from '../pages/Adds';
import Aweb from '../pages/MyWeb/react';
import bweb from '../pages/MyWeb/reactnative';
import cweb from '../pages/MyWeb/javascript';
import dweb from '../pages/MyWeb/es6';
import eweb from '../pages/MyWeb/reactnavigation';
import fweb from '../pages/MyWeb/reactrouter';
import gweb from '../pages/MyWeb/redux';
import hweb from '../pages/MyWeb/davjs';
import iweb from '../pages/MyWeb/nodejs';
import jweb from '../pages/MyWeb/eslint';

import { xiangji } from '../components/icons/signin';

headerBackTitle = '返回';

export const stackPageData = [
  //登录页面
  {
    name: 'SignIn',
    component: SignIn,
    options: {
      headerShown: false,
      header: () => null,
    },
  },

  {
    name: 'Home',
    component: Home,
    options: ({ navigation, route }) => {
      let tabName = 'TransportHome';
      if (route.state) {
        const { routeNames, index } = route.state;
        tabName = routeNames.filter((item, key) => key == index)[0];
      }
      return {
        headerBackTitleVisible: false,
        headerBackImage: () => <Image />,
        title: !tabName ? '首页' : tabName == 'TransportHome' ? '首页' : tabName == 'Find' ? '常用文档' : tabName == 'OrderHome' ? '通讯录' : '',
        headerStyle: { backgroundColor: tabName == 'MyHome' ? '#fff' : '#f2f2f2' },
        headerTintColor: '#333333',
        headerRight: () =>
          tabName == 'TransportHome' ? (
            <Button bordered={false} style={{ paddingRight: 20 }} onPress={() => navigation.navigate('')}>
              <Icon name="plus-circle-o" size={22} fill="#333333" />
            </Button>
          ) : tabName == 'OrderHome' ? (
            <Button bordered={false} style={{ paddingRight: 20 }} onPress={() => navigation.navigate('')}>
              <Icon name="user-add" size={22} fill="#333333" />
            </Button>
          ) : tabName != 'Find' ? (
            <Button bordered={false} style={{ paddingRight: 20 }} onPress={() => navigation.navigate('')}>
              <Icon xml={xiangji} size={22} fill="#333333" />
            </Button>
          ) : null,
      };
    },
  },

  {
    name: 'OrderHome',
    component: OrderHome,
    options: {
      title: '通讯录',
      headerStyle: { backgroundColor: '#f2f2f2' },
      headerTintColor: '#333333',
      headerRight: () => (
        <Button bordered={false} style={{ paddingRight: 20 }} onPress={() => navigation.navigate('')}>
          <Icon name="plus-circle-o" size={22} fill="#333333" />
        </Button>
      ),
    },
  },

  {
    name: 'DevOptions',
    component: DevOptions,
    options: {
      headerBackTitle,
      title: '其他',
      headerStyle: { backgroundColor: '#6395f5' },
      headerTintColor: '#ffffff',
    },
  },
  {
    name: 'MyHomeSetting',
    component: MyHomeSetting,
    options: {
      headerBackTitle,
      title: '设置',
      headerStyle: { backgroundColor: '#6395f5' },
      headerTintColor: '#ffffff',
    },
  },

  {
    name: 'Gesture',
    component: Gesture,
    options: {
      headerBackTitle,
      title: '密码页面',
      headerStyle: { backgroundColor: '#6395f5' },
      headerTintColor: '#ffffff',
    },
  },
  {
    name: 'Adds',
    component: Adds,
    options: {
      headerBackTitle,
      title: '我的页面',
      headerStyle: { backgroundColor: '#6395f5' },
      headerTintColor: '#ffffff',
    },
  },
  {
    name: 'Aweb',
    component: Aweb,
    options: {
      headerBackTitle,
      title: 'React 文档',
      headerStyle: { backgroundColor: '#6395f5' },
      headerTintColor: '#ffffff',
    },
  },
  {
    name: 'bweb',
    component: bweb,
    options: {
      headerBackTitle,
      title: 'reactnative 文档',
      headerStyle: { backgroundColor: '#6395f5' },
      headerTintColor: '#ffffff',
    },
  },
  {
    name: 'cweb',
    component: cweb,
    options: {
      headerBackTitle,
      title: 'javascript 文档',
      headerStyle: { backgroundColor: '#6395f5' },
      headerTintColor: '#ffffff',
    },
  },
  {
    name: 'dweb',
    component: dweb,
    options: {
      headerBackTitle,
      title: 'es6 文档',
      headerStyle: { backgroundColor: '#6395f5' },
      headerTintColor: '#ffffff',
    },
  },
  {
    name: 'eweb',
    component: eweb,
    options: {
      headerBackTitle,
      title: 'reactnavigation 文档',
      headerStyle: { backgroundColor: '#6395f5' },
      headerTintColor: '#ffffff',
    },
  },
  {
    name: 'fweb',
    component: fweb,
    options: {
      headerBackTitle,
      title: 'reactrouter 文档',
      headerStyle: { backgroundColor: '#6395f5' },
      headerTintColor: '#ffffff',
    },
  },
  {
    name: 'gweb',
    component: gweb,
    options: {
      headerBackTitle,
      title: 'redux 文档',
      headerStyle: { backgroundColor: '#6395f5' },
      headerTintColor: '#ffffff',
    },
  },
  {
    name: 'hweb',
    component: hweb,
    options: {
      headerBackTitle,
      title: 'davjs 文档',
      headerStyle: { backgroundColor: '#6395f5' },
      headerTintColor: '#ffffff',
    },
  },
  {
    name: 'iweb',
    component: iweb,
    options: {
      headerBackTitle,
      title: 'nodejs 文档',
      headerStyle: { backgroundColor: '#6395f5' },
      headerTintColor: '#ffffff',
    },
  },
  {
    name: 'jweb',
    component: jweb,
    options: {
      headerBackTitle,
      title: 'eslint 文档',
      headerStyle: { backgroundColor: '#6395f5' },
      headerTintColor: '#ffffff',
    },
  },
];
