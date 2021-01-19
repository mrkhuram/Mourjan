/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  TextInput,
  Switch,
} from 'react-native';
import Flag from 'react-native-flags';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMateial from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@react-navigation/native';
import {connect, Provider} from 'react-redux'

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
const HomeScreen = ({navigation,countryname}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const {colors} = useTheme();

  ToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.wrp}>
            <LinearGradient
              colors={colors.backgroundColor}
              style={styles.linearGradient}>
              <View style={styles.inputWrp}>
                <Icon
                  name="search"
                  size={20}
                  color={isEnabled ? 'white' : 'gray'}
                  style={{padding: 10}}
                />
                <TextInput
                  style={[
                    styles.textInput,
                    {color:colors.text},
                  ]}
                  placeholder="What are you looking for"
                />
              </View>
              <View style={styles.inputWrp}>
                <Icon
                  name="edit"
                  size={25}
                  color={colors.text}
                  style={{padding: 10}}
                />
                <Text

                  style={[styles.text, {color:colors.text}]}>
                  {' '}
                  Post an Ad
                </Text>
              </View>
              <View style={styles.inputWrp}></View>
              <View style={[styles.inputWrp, styles.spaceBetween]}>
                <View style={styles.realStateLeft}>
                  <Icon
                    name="home"
                    size={25}
                    color={colors.text}
                    style={{padding: 10}}
                  />
                  <Text
                    style={[
                      styles.text,
                      {color:colors.text},
                    ]}>
                    {' '}
                    Real Estate
                  </Text>
                </View>
                <View style={styles.realStateRight}>
                  <Icon
                    name="chevron-right"
                    size={20}
                    color={colors.text}
                    style={{padding: 10}}
                  />
                </View>
              </View>
              <View style={[styles.inputWrp, styles.spaceBetween]}>
                <View style={styles.realStateLeft}>
                  <Icons
                    name="car-multiple"
                    size={25}
                    color={colors.text}
                    style={{padding: 10}}
                  />
                  <Text
                    style={[
                      styles.text,
                      {color:colors.text},
                    ]}>
                    {' '}
                    Cars
                  </Text>
                </View>
                <View style={styles.realStateRight}>
                  <Icon
                    name="chevron-right"
                    size={20}
                    color={colors.text}
                    style={{padding: 10}}
                  />
                </View>
              </View>
              <View style={[styles.inputWrp, styles.spaceBetween]}>
                <View style={styles.realStateLeft}>
                  <Icons
                    name="newspaper-variant-multiple"
                    size={25}
                    color={colors.text}
                    style={{padding: 10}}
                  />
                  <Text
                    style={[
                      styles.text,
                      {color:colors.text},
                    ]}>
                    {' '}
                    Jobs
                  </Text>
                </View>
                <View style={styles.realStateRight}>
                  <Icon
                    name="chevron-right"
                    size={20}
                    color={colors.text}
                    style={{padding: 10}}
                  />
                </View>
              </View>
              <View style={[styles.inputWrp, styles.spaceBetween]}>
                <View style={styles.realStateLeft}>
                  <Icon
                    name="gears"
                    size={25}
                    color={colors.text}
                    style={{padding: 10}}
                  />
                  <Text
                    style={[
                      styles.text,
                      {color:colors.text},
                    ]}>
                    {' '}
                    Services
                  </Text>
                </View>
                <View style={styles.realStateRight}>
                  <Icon
                    name="chevron-right"
                    size={20}
                    color={colors.text}
                    style={{padding: 10}}
                  />
                </View>
              </View>
              <View style={[styles.inputWrp, styles.spaceBetween]}>
                <View style={styles.realStateLeft}>
                  <IconFoundation
                    name="page"
                    size={25}
                    color={colors.text}
                    style={{padding: 10}}
                  />
                  <Text
                    style={[
                      styles.text,
                      {color:colors.text},
                    ]}>
                    {' '}
                    Miscellaneous
                  </Text>
                </View>
                <View style={styles.realStateRight}>
                  <Icon
                    name="chevron-right"
                    size={20}
                    color={colors.text}
                    style={{padding: 10}}
                  />
                </View>
              </View>
              <View style={[styles.inputWrp, styles.spaceBetween]}></View>
              <View style={[styles.inputWrp, styles.spaceBetween]}></View>
              <View style={[styles.inputWrp, styles.spaceBetween]}>
                <View style={styles.realStateLeft}>
                  <IconMateial
                    name="my-location"
                    size={25}
                    color={colors.text}
                    style={{padding: 10}}
                  />
                  <Text
                    style={[
                      styles.text,
                      {color:colors.text},
                    ]}>
                    {' '}
                   {countryname}
                  </Text>
                </View>
              </View>
              <View style={[styles.inputWrp, styles.spaceBetween]}>
                <View style={styles.realStateLeft}>
                  <Icons
                    name="help-circle"
                    size={25}
                    color={colors.text}
                    style={{padding: 10}}
                  />
                  <Text
                    style={[
                      styles.text,
                      {color:colors.text},
                    ]}>
                    {' '}
                    Help
                  </Text>
                </View>
              </View>
            </LinearGradient>
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
    // height: height * 1,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
  },
  itemsOut: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  itemName: {fontSize: 18},
  logoImg: {
    width: width * 1,
    height: height * 1,
    flex: 1,
    flexDirection: 'row',
    resizeMode: 'stretch',
  },
  inputWrp: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 0.0725,
    borderBottomWidth: 1,
  },
  textInput: {
    width: width,
    height: height * 0.08,
    padding: 5,
    fontSize: 18,
  },
  text: {
    alignItems: 'center',
    fontSize: 18,
  },
  spaceBetween: {
    justifyContent: 'space-around',
  },
  realStateLeft: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

let  mapStateToProps = state =>{
  return {
    countryname: state.ThemeReducer.country
  }
}
export default connect(mapStateToProps)(HomeScreen)
export let ToSettings;
