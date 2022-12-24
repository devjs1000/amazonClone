import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {realme10} from '../../assets';

const SpecialDealCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.title}>
          <Image
            source={{
              uri: 'https://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/11/16/Photos/Home%20Page/GO%20(77)-kjmB--621x414@LiveMint.png',
            }}
            style={styles.brandLogo}
          />
          <Text
            style={{
              fontSize: 14,
            }}>
            Amazon Specials
          </Text>
        </View>
        <View>
          <View style={styles.title}>
          <Text style={styles.heading}>Realme 10</Text>
          <Text style={styles.tag}>5G</Text>

            </View>
          <Text style={styles.subHeading}>The 5G Super Note</Text>
          <Text style={styles.subHeading}>Super Fast, Super Powerful</Text>
          <Text style={styles.subHeading}>Snapdragon 4 Gen 1</Text>
          <Text style={styles.subHeading}>Launch Event 5th jan, 2023</Text>
        </View>
      </View>
      <Image style={styles.image} source={realme10} />
    </View>
  );
};

export default SpecialDealCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 250,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 200,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 15,
    color: 'grey',
    fontWeight: 'bold',
    marginTop: 8,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  tag:{
    borderColor:'black',
    borderRadius:6,
    borderWidth:1,
    marginHorizontal:10,
    paddingHorizontal:5,
    fontWeight:'bold'
  }
});
