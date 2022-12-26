import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/theme.constant'

const NavBarBasic = ({navigation}) => {
  return (
    <View style={styles.container} >
     
    </View>
  )
}

export default NavBarBasic

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: colors.primary,
    }   
})