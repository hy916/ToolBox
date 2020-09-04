import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './models';
import AuthLoadingScreen from './pages/AuthLoading';
import { stackPageData } from './routes';
import Swiper from 'react-native-swiper';

const Stack = createStackNavigator();
console.disableYellowBox = true;

export default () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <AuthLoadingScreen>
        {(token) => (
          <NavigationContainer>
            <Stack.Navigator initialRouteName={!!token ? 'Home' : 'SignIn'}>
              {stackPageData.map((props, index) => {
                return (
                  <Stack.Screen
                    key={index}
                    {...props}
                    // name="Home"
                    // options={{
                    //   header: () => null
                    // }}
                    // component={Home}
                  />
                );
              })}
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </AuthLoadingScreen>
    </Provider>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
