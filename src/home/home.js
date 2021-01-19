/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import logo from './2.jpg';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
const HomeScreen = ({navigation}) => {

  setTimeout(()=>{
    navigation.navigate("ChooseCountry")
  },1000)
  const moveTo = ()=>{
    navigation.navigate("ChooseCountry")
  }
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.wrp} onPress={moveTo}>
            <Image source={logo} style={styles.logoImg}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  wrp: {
    height: height * 1,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImg:{
      width: width*1,
      height: height*1,
      flex: 1,
      flexDirection: 'row',
      resizeMode: 'stretch'

  }
});

export default HomeScreen;
