/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Flag from 'react-native-flags';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native'
import { connect } from 'react-redux';
import {changeCountry} from '../../redux/themeAction'

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;




const HomeScreen = ({navigation,changeCountry}) => {
  const [dark, setDark] = useState(false);
  const { colors } = useTheme();

  const countryList = [
    {
      name: 'Afghanistan',
      code: 'AF',
    },
    {
      name: 'Algeria',
      code: 'DZ',
    },
    {
      name: 'Behrain',
      code: 'BH',
    },
    {
      name: 'Brunei',
      code: 'BN',
    },
    {
      name: 'Comoros',
      code: 'KM',
    },
    {
      name: 'Djibouti',
      code: 'DJ',
    },
    {
      name: 'Eypt',
      code: 'EG',
    },
    {
      name: 'Iran',
      code: 'IR',
    },
    {
      name: 'Iraq',
      code: 'IQ',
    },
    {
      name: 'Jordan',
      code: 'JO',
    },
    {
      name: 'Kuwait',
      code: 'KW',
    },
    {
      name: 'Libya',
      code: 'LY',
    },
    {
      name: 'Malaysia',
      code: 'MY',
    },
    {
      name: 'Maldives',
      code: 'MV',
    },
    {
      name: 'Mauritania',
      code: 'MR',
    },
    {
      name: 'Morocco',
      code: 'MA',
    },
    {
      name: 'Oman',
      code: 'OM',
    },
    {
      name: 'Palestine',
      code: 'PS',
    },
    {
      name: 'Pakistan',
      code: 'PK',
    },
    {
      name: 'Qatar',
      code: 'QA',
    },

    {
      name: 'Saudi Arabia',
      code: 'SA',
    },
    {
      name: 'Somalia',
      code: 'SO',
    },
    {
      name: 'Tunisia',
      code: 'TN',
    },
    {
      name: 'United Arab Emirates',
      code: 'AE',
    },
  ];
  const moveTo = (countryName) => {
    changeCountry(countryName)
    navigation.navigate('Mourja');
  };
 
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.wrp}>
            {countryList.map((item, key) => {
              return (
                <LinearGradient
                  key={key}
                  colors={colors.backgroundColor}
                  style={styles.linearGradient}>
                  <TouchableOpacity style={styles.itemsOut} onPress={()=> moveTo(item.name)}>
                    <View>
                      <Text style={[styles.itemName,{color:colors.text}]} >{item.name}</Text>
                    </View>
                    <View style={styles.flag}>
                      <Flag code={item.code} size={32} />
                    </View>
                  </TouchableOpacity>
                </LinearGradient>
              );
            })}
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
    // backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  itemName: {fontSize: 18, },
  logoImg: {
    width: width * 1,
    height: height * 1,
    flex: 1,
    flexDirection: 'row',
    resizeMode: 'stretch',
  },
});

export default connect(null, {changeCountry})(HomeScreen)
