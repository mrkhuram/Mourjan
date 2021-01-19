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
  Dimensions,
  Image,
  Switch,
} from 'react-native';
import IconMateial from 'react-native-vector-icons/MaterialIcons';
import img from './2.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@react-navigation/native';
import ToggleSwitch from 'toggle-switch-react-native';
import {connect} from 'react-redux'
import ThemeChange from '../../redux/themeAction'

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const HomeScreen = ({navigation,ThemeChange,theme}) => {
  
  const [isEnabled, setIsEnabled] = useState(false);
  const {colors} = useTheme();
  
  moveBack = () => {
    navigation.navigate('Mourja');
  };
  useEffect(()=>{
    setIsEnabled(theme.dark)
  },[theme.dark])

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
              <View style={styles.imgWrp}>
                <Image source={img} />
                <IconMateial
                  name="mode-edit"
                  size={20}
                  color="lightgray"
                  style={{
                    padding: 10,
                    position: 'absolute',
                    zIndex: 19,
                    elevation: 10,
                    backgroundColor: '#780001',
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: 'white',
                    left: width * 0.59,
                    top: height * 0.18,
                  }}
                />
              </View>

              <View
                style={[
                  styles.inputWrp,
                  styles.spaceBetween,
                  styles.borderTop,
                ]}>
                <View style={styles.realStateLeft}>
                  <Text style={[styles.text, {color: colors.text}]}>
                    {' '}
                    John Carter
                  </Text>
                </View>
                <View style={styles.realStateRight}>
                  <IconMateial
                    name="mode-edit"
                    size={20}
                    color="lightgray"
                    style={{padding: 10}}
                  />
                </View>
              </View>
              <View style={[styles.inputWrp, styles.spaceBetween]}>
                <View style={styles.realStateLeft}>
                  <Text style={[styles.text, {color: colors.text}]}>
                    {' '}
                    abc@gmail.com
                  </Text>
                </View>
                <View style={styles.realStateRight}>
                  <IconMateial
                    name="mode-edit"
                    size={20}
                    color="lightgray"
                    style={{padding: 10}}
                  />
                </View>
              </View>
              <View style={[styles.inputWrp, styles.spaceBetween]}>
                <View style={styles.realStateLeft}>
                  <Text style={[styles.text, {color: colors.text}]}>
                    {' '}
                    Password
                  </Text>
                </View>
                <View style={styles.realStateRight}>
                  <IconMateial
                    name="mode-edit"
                    size={20}
                    color="lightgray"
                    style={{padding: 10}}
                  />
                </View>
              </View>
              <View style={[styles.inputWrp, styles.spaceBetween]}>
                <View style={styles.realStateLeft}>
                  <Text style={[styles.text, {color: colors.text}]}>
                    {' '}
                    Theme
                  </Text>
                </View>
                <View style={[styles.realStateRight,{flexDirection: 'row'}]}>
                  
                  <ToggleSwitch
                    isOn={isEnabled}
                    onColor="green"
                    offColor="green"
                    label="Light"
                    labelStyle={{color: colors.text, fontWeight: '900'}}
                    size="medium"
                    onToggle={ThemeChange}
                   
                  />
                  <Text style={{marginHorizontal: 10, marginTop: 2,color: colors.text,}}>Dark</Text>
                </View>
              </View>
              <View style={[styles.inputWrp, styles.spaceBetween]}>
                <View style={styles.realStateLeft}>
                  <Text style={[styles.text, {color: colors.text}]}>
                    {' '}
                    Language
                  </Text>
                </View>
                <View style={styles.realStateRight}>
                  <IconMateial
                    name="mode-edit"
                    size={20}
                    color="lightgray"
                    style={{padding: 10}}
                  />
                </View>
              </View>
              <View style={styles.btnOuter}>
                <LinearGradient
                  colors={
                    isEnabled ? ['#4c669f', '#3b5998', '#192f6a'] : ['#780001', '#780001']
                  }
                  style={styles.linearGradient}>
                  <TouchableOpacity style={styles.btnOut}>
                    <Text style={styles.doneTxt}>Done</Text>
                  </TouchableOpacity>
                </LinearGradient>
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
    backgroundColor: 'white',
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
  imgWrp: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  borderTop: {
    borderTopWidth: 1,
  },
  btnOuter: {
    marginTop: height * 0.17,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.075,
  },
  btnOut: {
    padding: 15,
    paddingLeft: 60,
    paddingRight: 60,
    // backgroundColor: '#780001',
  },
  doneTxt: {
    color: 'white',
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '700',
  },
});

let mapStateToProps = store =>{
  return{
    theme: store.ThemeReducer
  }
}
export default connect(mapStateToProps, {ThemeChange})(HomeScreen);
export let moveBack;
