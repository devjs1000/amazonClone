import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const RemindingActionsCard = ({uri, title}) => {
  return (
    <View style={styles.keepShopping}>
        {title!=='' && (
      <Text
        style={{
          fontSize: 16,
          marginBottom:20
        }}>
        {title}
      </Text>
        )}
      <Image
        source={{
          uri
        }}
        style={styles.productImage}
      />
    </View>
  );
};

export default RemindingActionsCard;

const styles = StyleSheet.create({
  keepShopping: {
    backgroundColor: 'white',
    width: 160,
    height: 220,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 6,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 6,
    // marginTop: 40,
  },
});
