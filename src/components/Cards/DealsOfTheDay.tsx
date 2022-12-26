import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import useInterval from '../../hooks/useInterval';
import {colors} from '../../constants/theme.constant';

const DealsOfTheDay = () => {
  const deals = [
    {
      name: 'Redmi 9',
      price: 10000,
      image:
        'https://i01.appmifile.com/webfile/globalimg/in/cms/303D1336-249C-0113-DA94-01ED533069F8.jpg',
      off: 10,
    },
    {
      name: 'Samsung M31',
      price: 15000,
      image:
        'https://images.samsung.com/is/image/samsung/p6pim/levant/sm-m135fidgmeb/gallery/levant-galaxy-m13-sm-m135-sm-m135fidgmeb-thumb-532933077?$480_480_PNG$',
      off: 40,
    },
  ];

  const [currentDeal, setCurrentDeal] = React.useState(0);
  const [seeAllDeals, setSeeAllDeals] = React.useState(false);

  useInterval({
    time: 3000,
    call: () => {
      if (seeAllDeals) return;
      setCurrentDeal(val => (!deals[val + 1] ? 0 : val + 1));
    },
  });

  const handleSeeAll = () => {
    setSeeAllDeals(val => !val);
  };

  return (
    <>
      {!seeAllDeals ? (
        <Deal deal={deals[currentDeal]} />
      ) : (
        <View>
          {deals.map((deal, index) => (
            <Deal key={index} deal={deal} />
          ))}
        </View>
      )}
      <View
        style={{
          padding: 20,
          backgroundColor: '#fff',
        }}>
        {!seeAllDeals && (
          <View style={styles.horizontal}>
            {deals.map((deal, index) => (
              <Image
                key={index}
                source={{uri: deal.image}}
                style={styles.minifiedImage}
              />
            ))}
          </View>
        )}

        <TouchableOpacity style={styles.linkButton} onPress={handleSeeAll}>
          <Text style={{color: 'teal', fontWeight: 'bold'}}>
            {!seeAllDeals ? 'See all deals' : 'See less deals'}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const Deal = ({deal}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: deal.image}} style={styles.image} />
      <View style={styles.horizontal}>
        <Text style={styles.tag}>Up to {deal.off}% off</Text>
        <Text style={styles.about}>Deal of the Day</Text>
      </View>
      <Text style={styles.title}>{deal.name}</Text>
    </View>
  );
};

export default DealsOfTheDay;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 400,
    marginHorizontal: 'auto',
  },
  tag: {
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'red',
    color: '#fff',
    width: 100,
    padding: 6,
  },
  title: {
    fontSize: 20,
    color: '#000',
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  about: {
    fontSize: 14,
    color: 'red',
    marginLeft: 10,
  },
  minifiedImage: {
    width: 100,
    height: 100,
    marginHorizontal: 4,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 6,
  },
  linkButton: {
    backgroundColor: '#fff',
    margin: 6,
  },
});
