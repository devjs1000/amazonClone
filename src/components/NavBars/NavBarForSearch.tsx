import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export const NavBarForSearch = ({navigation}: NavBarForSearchProps) => {
  return (
    <SafeAreaView style={styles.statusBar}>
      <View style={styles.flexBox}>
        <View style={styles.container}>
          <TouchableOpacity style={[styles.button, styles.b1]}>
            <Text>Se</Text>
          </TouchableOpacity>

          <TextInput
            placeholderTextColor={'gray'}
            placeholder="Search Amazon.nl"
            style={styles.textInput}
          />
          <TouchableOpacity style={[styles.button, styles.b2]}>
            <Text style={{color: 'gray'}}>Im</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.mic}>
          <Text style={{color: 'gray'}}>Mi</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'rgb(157, 212, 222)',
  },
  textInput: {
    backgroundColor: 'white',
    padding: 10,
    width: 300,
    height: 50,
    margin: 'auto',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 40,
  },
  container: {
    position: 'relative',
  },
  button: {
    zIndex: 1,
    backgroundColor: 'white',
    height: 46,
    borderRadius: 6,
    width: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  b1: {
    position: 'absolute',
    left: 2,
    top: 2,
  },
  b2: {
    position: 'absolute',
    right: 2,
    top: 2,
  },
  mic: {
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexBox: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginVertical: 12,
  },
});

interface NavBarForSearchProps {
  navigation: any;
}
