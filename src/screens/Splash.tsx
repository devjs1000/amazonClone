import {Image, Text, View} from 'react-native';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {amazonLogo} from '../assets';

export class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={amazonLogo} />
      </View>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height:60
  },
});
