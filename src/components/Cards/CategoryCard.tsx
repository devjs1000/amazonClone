import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {amazonLogo} from '../../assets';
const CategoryCard = ({uri, title}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri,
        }}
        style={styles.image}
      />
      <Text 
        style={styles.title}
      >{title}</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 80,
    height: 80,
    margin: 4,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginTop:6
  },
  title:{
      fontSize:12,
      marginTop:12
  }
});
