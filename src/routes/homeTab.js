import React from 'react';
import { Icon } from '@uiw/react-native';
import MyHome from '../pages/MyHome';
import OrderHome from '../pages/OrderHome';
import TransportHome from '../pages/TransportHome';
import Find from '../pages/Find';
import { tongxunlv, faxian } from '../components/icons/signin';

export default [
  {
    name: 'TransportHome',
    component: TransportHome,
    options: {
      title: '首页',
      tabBarIcon: ({ focused }) => {
        return <Icon name="weixin" size={22} color={focused ? '#60bb66' : '#AAAAAB'} />;
      },
    },
  },
  {
    name: 'OrderHome',
    component: OrderHome,
    options: {
      title: '第二页',
      tabBarIcon: ({ focused }) => {
        return <Icon name="usergroup-add" size={22} color={focused ? '#60bb66' : '#AAAAAB'} />;
      },
    },
  },
  {
    name: 'Find',
    component: Find,
    options: {
      title: '发现',
      tabBarIcon: ({ focused }) => {
        return <Icon name="safari" size={22} color={focused ? '#60bb66' : '#AAAAAB'} />;
      },
    },
  },
  {
    name: 'MyHome',
    component: MyHome,
    options: {
      title: '我',
      tabBarIcon: ({ focused }) => {
        return <Icon name="user" size={22} color={focused ? '#60bb66' : '#AAAAAB'} />;
      },
    },
  },
];
