/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Switch,
} from 'react-native';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/home/home';
import Country from './src/Country/Country';
import Mourja from './src/Mourja/Mourja';
import Settings from './src/Settings/Settings';
import Icon from 'react-native-vector-icons/FontAwesome';
import {moveBack} from './src/Settings/Settings';
import {ToSettings} from './src/Mourja/Mourja';
import {connect, Provider} from 'react-redux';
import store from './redux/store';
import {Header} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

const Stack = createStackNavigator();

let mapStateToProps = (store) => {
  return {
    themedark: store.ThemeReducer.dark,
  };
};
let Apps = connect(
  mapStateToProps,
  null,
)(({themedark}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      text: isEnabled ? 'white' : 'black',
      backgroundColor: isEnabled
        ? ['#4c669f', '#3b5998', '#192f6a']
        : ['#ffffff', '#ffffff'],
    },
  };
  useEffect(() => {
    console.log('works here');
    setIsEnabled(themedark);
  }, [themedark]);

  const GradientHeader = (props) => (
    <View style={{backgroundColor: '#eee'}}>
      <LinearGradient
        colors={
          isEnabled ? ['#4c669f', '#3b5998', '#192f6a'] : ['#780001', '#780001']
        }>
        <Header {...props} />
      </LinearGradient>
    </View>
  );

  return (
    <>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChooseCountry"
            component={Country}
            options={{
              headerTitle: 'Choose Country/City',
              headerStyle: {
                backgroundColor: 'transparent',
              },
              header: (props) => <GradientHeader {...props} />,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontStyle: 'italic',
              },
            }}
          />
          <Stack.Screen
            name="Mourja"
            component={Mourja}
            options={{
              headerTitle: 'Mourja',
              headerStyle: {
                backgroundColor: 'transparent',
              },
              header: (props) => <GradientHeader {...props} />,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontStyle: 'italic',
              },
              headerRight: () => (
                <TouchableOpacity
                  onPress={ToSettings}
                  title="Info"
                  color="#fff">
                  <Icon
                    name="gear"
                    size={30}
                    color="#ffffff"
                    style={{paddingRight: 10}}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              headerTitle: 'Settings',
              headerStyle: {
                backgroundColor: 'transparent',
              },
              header: (props) => <GradientHeader {...props} />,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontStyle: 'italic',
              },
              headerLeft: () => (
                <TouchableOpacity onPress={moveBack} title="Info" color="#fff">
                  <Icon
                    name="chevron-left"
                    size={20}
                    color="#ffffff"
                    style={{paddingLeft: 10}}
                  />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
});

const MainApp = () => {
  return (
    <Provider store={store}>
      <Apps />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default MainApp;
export let toggleSwitch;
