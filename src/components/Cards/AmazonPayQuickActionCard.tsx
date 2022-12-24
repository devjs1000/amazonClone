import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

const AmazonPayQuickActionCard = () => {
  return <View style={styles.container}>
    <IconButton 
    title={"Amazon Pay"}
    uri={"https://pbs.twimg.com/profile_images/1214220012979920898/N4tFtfjN_400x400.png"}
    />
     <IconButton 
    title={"UPI"}
    uri={"https://i.pinimg.com/originals/0a/88/92/0a889272455197e45dbbd975e542b1b5.png"}
    />
     <IconButton 
    title={"Scan & Pay"}
    uri={"https://play-lh.googleusercontent.com/DrlS92lxLsgBwi67iVHYZAHzGBrO00d4oJVF_yHe_cgpEJcrmC2YJT7vdIqp5mXB0w8=w526-h296-rw"}
    />
     <IconButton 
    title={"Bill Pay"}
    uri={"https://cdn-icons-png.flaticon.com/512/166/166162.png"}
    />
  </View>;
};

export default AmazonPayQuickActionCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 200,
    height: 220,
    borderRadius: 6,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 50,
    },
    title:{
        fontSize:12,
        marginTop:5
    },
    iconButton:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:2,
        marginTop:10
    }
});

const IconButton = ({uri, title}) => {
  return (
    <TouchableOpacity style={styles.iconButton}>
      <Image source={{uri}} style={styles.logo} />
      <Text style={styles.title} >{title}</Text>
    </TouchableOpacity>
  );
};
